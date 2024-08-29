import { MultiTask } from '@api';
import { useCallback } from 'react';

const useSearchMaterials = (
  data: MultiTask[],
  searchTerm: string,
  users: string[],
  types: string[]
) => {
  const searchMaterials = useCallback(() => {
    const filteredMaterials = data.filter((task) => {
      const matchesColor = types.length === 0 || types.includes(task.type);
      const matchesSize =
        users.length === 0 || users.includes(task.jobber.name);
      const matchesTerm =
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.jobber.name.toString().includes(searchTerm);
      return matchesColor && matchesSize && matchesTerm;
    });
    return filteredMaterials;
  }, [data, searchTerm, types, users]);

  return { searchMaterials };
};

export default useSearchMaterials;
