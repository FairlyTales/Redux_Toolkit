import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {ReservationCard} from "./ReservationCard";
import {addReservation } from "./features";
import {CustomerCard} from "./CustomerCard";
import "./App.css";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value);
  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard key={name} name={name} index={index}/>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard key={customer.id} id={customer.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
