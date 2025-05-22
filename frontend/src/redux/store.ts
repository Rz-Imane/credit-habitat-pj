import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// Types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
