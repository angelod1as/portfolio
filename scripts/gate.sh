#!/usr/bin/env bash
#
# gate.sh — the deterministic stop condition.
#
#   bash scripts/gate.sh [fast|full|slow]   (default: full)
#
# Exit 0  => green. The loop may stop.
# Exit 1  => a gate command failed. The loop must keep working.
# Exit 2  => the gate itself is broken (missing config, missing executable).
#            Treated as failure, never as "skip".
#
# The last line of output is machine readable:
#   GATE <tier> PASS <passed>/<total>
#   GATE <tier> FAIL <passed>/<total>
#
set -uo pipefail

TIER="${1:-full}"
case "$TIER" in
  fast|full|slow) ;;
  *) echo "gate.sh: unknown tier '$TIER' (expected fast|full|slow)" >&2; exit 2 ;;
esac

# --- locate config -----------------------------------------------------------

find_root() {
  local d="$PWD"
  while [ "$d" != "/" ]; do
    [ -f "$d/.os/gates.yaml" ] && { printf '%s' "$d"; return 0; }
    d="$(dirname "$d")"
  done
  return 1
}

ROOT="$(find_root)" || {
  echo "gate.sh: no .os/gates.yaml found in this directory or any parent." >&2
  echo "         Run /os:new to scaffold one, or create it from a preset." >&2
  exit 2
}
CONFIG="$ROOT/.os/gates.yaml"
cd "$ROOT" || exit 2

# --- minimal YAML list extraction --------------------------------------------
# Handles exactly the shape gates.yaml uses: a top-level key, then indented
# "- item" lines. Quotes are stripped. Comments and blank lines are ignored.

extract_list() {
  local key="$1"
  awk -v key="$key" '
    # a non-indented, non-comment key line ends the previous block
    /^[^[:space:]#]/ { inblock = ($0 ~ "^" key ":[[:space:]]*$") ? 1 : 0; next }
    !inblock { next }
    /^[[:space:]]*#/ { next }
    /^[[:space:]]*$/ { next }
    /^[[:space:]]*-[[:space:]]*/ {
      sub(/^[[:space:]]*-[[:space:]]*/, "")
      # strip a trailing comment only when it follows the closing quote
      if ($0 ~ /^".*"/)      { sub(/^"/, ""); sub(/".*$/, "") }
      else if ($0 ~ /^'"'"'.*'"'"'/) { sub(/^'"'"'/, ""); sub(/'"'"'.*$/, "") }
      print
    }
  ' "$CONFIG"
}

extract_scalar() {
  local key="$1"
  awk -v key="$key" '
    $1 == key":" { print $2; exit }
  ' "$CONFIG"
}

# bash 3.2 (macOS default) has no mapfile, so read the list the portable way.
COMMANDS=()
while IFS= read -r _line; do
  [ -z "$_line" ] && continue
  COMMANDS[${#COMMANDS[@]}]="$_line"
done < <(extract_list "$TIER")

if [ "${#COMMANDS[@]}" -eq 0 ]; then
  # An empty tier is a configuration error for full; acceptable for fast/slow.
  if [ "$TIER" = "full" ]; then
    echo "gate.sh: tier 'full' is empty in $CONFIG. A full gate with no commands is not a gate." >&2
    echo "GATE full FAIL 0/0"
    exit 2
  fi
  echo "gate.sh: tier '$TIER' is empty — nothing to run."
  echo "GATE $TIER PASS 0/0"
  exit 0
fi

# --- run ---------------------------------------------------------------------

PRESET="$(extract_scalar preset)"
echo "gate.sh: tier=$TIER preset=${PRESET:-unset} root=$ROOT"
echo "─────────────────────────────────────────────────────────────"

PASSED=0
FAILED=0
BROKEN=0
FAILURES=()

for cmd in "${COMMANDS[@]}"; do
  [ -z "$cmd" ] && continue
  echo ""
  echo "▶ $cmd"
  output="$(bash -c "$cmd" 2>&1)"
  code=$?
  if [ -n "$output" ]; then
    printf '%s\n' "$output" | sed 's/^/  /'
  fi
  if [ $code -eq 0 ]; then
    echo "  ✓ pass"
    PASSED=$((PASSED + 1))
  elif [ $code -eq 127 ]; then
    # command not found — the gate is broken, not the code. Never skip.
    echo "  ✗ BROKEN GATE — command not found (exit 127)"
    BROKEN=$((BROKEN + 1))
    FAILED=$((FAILED + 1))
    FAILURES[${#FAILURES[@]}]="$cmd  (exit 127: not found)"
  else
    echo "  ✗ fail (exit $code)"
    FAILED=$((FAILED + 1))
    FAILURES[${#FAILURES[@]}]="$cmd  (exit $code)"
  fi
done

TOTAL=$((PASSED + FAILED))
echo ""
echo "─────────────────────────────────────────────────────────────"

if [ $FAILED -eq 0 ]; then
  echo "GATE $TIER PASS $PASSED/$TOTAL"
  exit 0
fi

echo "Failed:"
for f in ${FAILURES[@]+"${FAILURES[@]}"}; do echo "  • $f"; done
echo ""
echo "GATE $TIER FAIL $PASSED/$TOTAL"

# A missing executable means the gate cannot be trusted at all.
[ $BROKEN -gt 0 ] && exit 2
exit 1
