import { RawMaterial } from '@types';
import { useMemo } from 'react';

const useGetUniqueItems = (data: RawMaterial[]) => {
  const uniqueSizes = useMemo(() => {
    const sizes = new Set<string>();
    data.forEach((material) => {
      sizes.add(material.size.toString());
    });
    return Array.from(sizes);
  }, [data]);

  const uniqueColors = useMemo(() => {
    const colors = new Set<string>();
    data.forEach((material) => {
      colors.add(material.color.toString());
    });
    return Array.from(colors);
  }, [data]);
  return { uniqueSizes, uniqueColors };
};

export default useGetUniqueItems;
