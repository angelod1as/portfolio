export type Addressed = {
  address: string
  source: string
}

/**
 * Two entries must never occupy one address. A static build would otherwise let the
 * last writer win, and the loser would surface weeks later as a mysteriously missing
 * page. Throwing here fails `pnpm build`, which is the gate.
 */
export function assertNoCollisions(entries: Addressed[]): void {
  const bySource = new Map<string, string[]>()

  for (const { address, source } of entries) {
    const sources = bySource.get(address) ?? []
    sources.push(source)
    bySource.set(address, sources)
  }

  const clashes = [...bySource.entries()].filter(
    ([, sources]) => sources.length > 1
  )

  if (clashes.length === 0) return

  const detail = clashes
    .map(([address, sources]) => `  ${address} ← ${sources.join(', ')}`)
    .join('\n')

  throw new Error(
    `Two or more entries resolve to the same address:\n${detail}\n` +
      'Rename one of the files, or move it to a different month.'
  )
}
