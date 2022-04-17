import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./app/store";
import {addFood} from "./features";
import {v4 as uuid} from "uuid";

interface CustomerCardProps {
  id: string;
}

export const CustomerCard: FC<CustomerCardProps> = ({id}) => {
  const [foodInput, setFoodInput] = useState<string>('');

  // bad code from optimization standpoint
  const customer = useSelector((state: RootState) => state.customers.value.find((customer) => customer.id === id));
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFood = () => {
    const newFood = {
      id,
      food: foodInput,
    }
    dispatch(addFood(newFood))
    setFoodInput('');
  }

  if (!customer) return <p>Customer error</p>

  return (
    <div className="customer-food-card-container">
      <p>{customer.name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {customer.food.map((food) => (
            <p key={uuid()}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
};
