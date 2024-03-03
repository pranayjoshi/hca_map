// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import displayData from './slice';

export const store = configureStore({
  reducer: {
    displayIds: displayData,
  },
});

