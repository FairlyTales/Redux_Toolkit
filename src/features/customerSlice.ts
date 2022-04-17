import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AddFoodPayload {
  id: string;
  food: string;
}

export interface Customer {
  id: string;
  name: string;
  food: string[];
}

export interface Customers {
  value: Customer[];
}

const initialState: Customers = {
  value: []
}

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },

    // this example is very bad from optimization standpoint
    addFood: (state, action: PayloadAction<AddFoodPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      })
    }
  }
})

export const {addCustomer, addFood} = customerSlice.actions;

export default customerSlice.reducer;
