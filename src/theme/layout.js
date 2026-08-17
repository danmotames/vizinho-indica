export const getHorizontalPadding = (width) => {
  if (width >= 900) return 40;
  if (width >= 600) return 24;
  return 16;
};
