import { MMKV } from 'react-native-mmkv';
import Constants from 'expo-constants';

const STORAGE_ENCRYPTION_KEY: string =
  Constants.expoConfig?.extra?.storageEncryptionKey;

const primitiveStorage = new MMKV({
  id: 'crafto-storage',
  encryptionKey: STORAGE_ENCRYPTION_KEY,
});

export default primitiveStorage;
