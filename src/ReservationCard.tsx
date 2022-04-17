import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {removeReservation} from "./features/reservationSlice";

export interface ReservationCardProps {
  name: string;
  index: number
}

export const ReservationCard: FC<ReservationCardProps> = ({name, index}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeReservation(index));
  }

  const handleAdd = () => {
    // dispatch();
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
