export const formatCardDate = (from: number, to?: number) => {
  if (!to) return `${from} → current`;
  if (from === to) return from;
  return `${from} → ${to}`;
};
