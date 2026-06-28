import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseNewsApi } from '@shared/api/baseNewsApi.ts';
import { baseSpaceDevsApi } from '@shared/api/baseSpaceDevsApi.ts';

const rootReducer = combineReducers({
  [baseSpaceDevsApi.reducerPath]: baseSpaceDevsApi.reducer,
  [baseNewsApi.reducerPath]: baseNewsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseSpaceDevsApi.middleware).concat(baseNewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
