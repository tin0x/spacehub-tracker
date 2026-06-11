import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from '@app/persist/persistConfig.ts';
import { baseNewsApi } from '@shared/api/baseNewsApi.ts';
import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';

const rootReducer = combineReducers({
  [baseSpaceDevsApi.reducerPath]: baseSpaceDevsApi.reducer,
  [baseNewsApi.reducerPath]: baseNewsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseSpaceDevsApi.middleware)
      .concat(baseNewsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
