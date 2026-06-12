import storage from 'redux-persist/es/storage';
import { baseNewsApi } from '@shared/api/baseNewsApi.ts';
import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: [baseSpaceDevsApi.reducerPath, baseNewsApi.reducerPath],
};
