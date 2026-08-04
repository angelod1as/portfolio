// Frontmatter dates are YAML dates, parsed as UTC midnight. Read them back in
// UTC so a negative-offset build machine doesn't render the previous day.
export const formatDate = (date: Date, { short = false } = {}) => {
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${short ? String(year).slice(-2) : year}`;
};

const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

export const isOld = (date: Date, now = new Date()) =>
  now.getTime() - date.getTime() > YEAR_IN_MS;
