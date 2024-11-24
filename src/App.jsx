import React from 'react';
import { AppRouter } from '@/router/AppRouter';
import { Loader } from './components/Loader';
import './i18n';

export const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <AppRouter />
    </React.Suspense>
  );
}
