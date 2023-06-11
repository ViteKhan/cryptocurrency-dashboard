export const getTotalSize = (languages: Record<string, number>) => {
  return Object.values(languages).reduce((acc, cur) => acc + cur, 0);
};