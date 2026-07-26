/**
 * Every entry lives at /YYYY/MM/slug, whatever its lane.
 *
 * The address comes from the entry's own date, never from where the file sits on
 * disk — so moving a file between lanes to reclassify it keeps the URL intact.
 */
export function addressFor(date: Date, id: string): string {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const slug = id.split('/').pop()
  return `/${year}/${month}/${slug}`
}
