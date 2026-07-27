import { getCollection } from 'astro:content'
import { toEntries, published, type Lane } from './entries'
import { assertNoCollisions } from './collisions'

/**
 * The one place content is read. Every page goes through here, so the collision
 * check runs before any page is emitted — a duplicate address fails the build
 * rather than silently dropping an entry.
 *
 * The return type is inferred on purpose: annotating it as `Entry[]` would erase
 * the per-collection union and pages could no longer render an entry.
 */
export async function loadPublished() {
  const [essays, notes, work, library] = await Promise.all([
    getCollection('essays'),
    getCollection('notes'),
    getCollection('work'),
    getCollection('library'),
  ])

  const live = published(toEntries({ essays, notes, work, library }))

  // Checked after drafts are removed: a draft occupies no address at all, so it
  // cannot collide with the published entry it is a rewrite of.
  assertNoCollisions(
    live.map(entry => ({
      address: entry.address,
      source: `${entry.lane}/${entry.id}`,
    }))
  )

  return live
}

export async function loadLane(lane: Lane) {
  return (await loadPublished()).filter(entry => entry.lane === lane)
}
