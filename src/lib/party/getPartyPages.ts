export const partyPages = ['suruba'] as const
export type PartyPages = typeof partyPages[number]

export const getPartyPages = async () => {
  return partyPages
}
