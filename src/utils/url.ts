// @ts-check
export const getUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  if (path.startsWith('/')) {
    return base.endsWith('/') ? base + path.slice(1) : base + path;
  }
  return path;
};
