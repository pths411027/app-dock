const SIZES = [50, 35, 20];
const SIZE = 50;
export const handleCountSize = (index: number, location: number) => {
  if (location === -1) return { size: SIZE, marginTop: 0 };
  const diff = Math.abs(index - location);
  switch (diff) {
    case 0:
      return { size: SIZE + SIZES[0], marginTop: -SIZES[0] };
    case 1:
      return { size: SIZE + SIZES[1], marginTop: -SIZES[1] };
    case 2:
      return { size: SIZE + SIZES[2], marginTop: -SIZES[2] };
    default:
      return { size: SIZE, marginTop: 0 };
  }
};
