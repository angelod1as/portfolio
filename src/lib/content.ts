import { getCollection } from 'astro:content'
import { toEntries, published, type Entry, type Lane } from './entries'
import { assertNoCollisions } from './collisions'

/**
 * The one place content is read. Every page goes through here, so the collision
 * check runs before any page is emitted — a duplicate address fails the build
 * rather than silently dropping an entry.
 */
export async function loadPublished(): Promise<Entry[]> {
  const [essays, notes, work, library] = await Promise.all([
    getCollection('essays'),
    getCollection('notes'),
    getCollection('work'),
    getCollection('library'),
  ])

  const all = toEntries({ essays, notes, work, library })

  assertNoCollisions(
    all.map(entry => ({
      address: entry.address,
      source: `${entry.lane}/${entry.id}`,
    }))
  )

  return published(all)
}

export async function loadLane(lane: Lane): Promise<Entry[]> {
  return (await loadPublished()).filter(entry => entry.lane === lane)
}
