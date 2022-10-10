import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // just for tests
    setTimeout(() => resolve(import('./MainPage')), 2000);
}));
