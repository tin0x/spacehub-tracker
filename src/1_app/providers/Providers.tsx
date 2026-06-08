import { Provider } from 'react-redux';
import { persistor, store } from '@app/store/store.ts';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
