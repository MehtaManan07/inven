import { RawMaterial } from '@types';
import { useCallback } from 'react';

const useSearchMaterials = (
  data: RawMaterial[],
  searchTerm: string,
  colors: string[],
  sizes: string[]
) => {
  const searchMaterials = useCallback(() => {
    const filteredMaterials = data.filter((material) => {
      const matchesColor =
        colors.length === 0 || colors.includes(material.color);
      const matchesSize = sizes.length === 0 || sizes.includes(material.size);
      const matchesTerm = material.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesColor && matchesSize && matchesTerm;
    });
    return filteredMaterials;
  }, [colors, data, searchTerm, sizes]);

  return { searchMaterials };
};

export default useSearchMaterials;
