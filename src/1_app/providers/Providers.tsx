import { Provider } from 'react-redux';
import { store } from '@app/store/store.ts';
import * as React from 'react';

export const Providers = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;
