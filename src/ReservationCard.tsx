import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {addCustomer, Customer, removeReservation} from "./features";
import {v4 as uuid} from 'uuid';
import {AppDispatch} from "./app/store";

export interface ReservationCardProps {
  name: string;
  index: number
}

export const ReservationCard: FC<ReservationCardProps> = ({name, index}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = () => {
    dispatch(removeReservation(index));
  }

  const handleAdd = () => {
    const newCustomer: Customer = {
      name,
      id: uuid(),
      food: [],
    }

    dispatch(addCustomer(newCustomer));
    dispatch(removeReservation(index));
  }

  return (
    <>
      <div className="reservation-card-container">
        <p>{name}</p>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleRemove}>remove</button>
      </div>
    </>
  );
};
