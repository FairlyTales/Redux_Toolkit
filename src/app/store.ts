import {configureStore} from "@reduxjs/toolkit";
import {reservationsSlice, customerSlice} from "../features";

export const store = configureStore({
  reducer: {
    reservations: reservationsSlice.reducer,
    customers: customerSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
