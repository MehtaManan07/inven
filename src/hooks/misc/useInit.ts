import { useQueryClient } from '@providers';
import { QueryKeyGenerator } from '@utils';
import { StorageKeys, primitiveStorage } from '@storage';

import { loadAsync as loadFontsAsync } from 'expo-font';
import { useCallback, useEffect, useReducer } from 'react';

import { AuthData } from '../auth/useAuth';

const useInit = () => {
  const [isCriticalInitCompleted, completeCriticalInit] = useReducer(
    () => true,
    false
  );
  const client = useQueryClient();
  
  const fontLoadingPromise = loadFontsAsync({
    'GT-Maru-Regular': require('@assets/fonts/GTMaru-Regular.otf'),
    'GT-Maru-Medium': require('@assets/fonts/GTMaru-Medium.otf'),
    'GT-Maru-Medium-Oblique': require('@assets/fonts/GT-Maru-Medium-Oblique.otf'),
    'GT-Maru-Bold': require('@assets/fonts/GTMaru-Bold.otf'),
    'GT-Maru-Black': require('@assets/fonts/GTMaru-Black.otf'),
    'BonaNova-Regular': require('@assets/fonts/BonaNova-Regular.ttf'),
    'BonaNova-Bold': require('@assets/fonts/BonaNova-Bold.ttf'),
  });
  const setAuthToken = useCallback(async () => {
    await fontLoadingPromise;

    const token = primitiveStorage.getString(StorageKeys.AuthToken);
    if (token) {
      client.setQueryData<AuthData>(
        QueryKeyGenerator.Auth(),
        (prev?: AuthData) => {
          return { ...prev, token };
        }
      );
    }
  }, [client, fontLoadingPromise]);

  useEffect(() => {
    setAuthToken().then(() => completeCriticalInit());
  }, [setAuthToken]);

  return isCriticalInitCompleted;
};

export default useInit;
