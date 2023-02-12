import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadSomeData();
  }, []);
  const people = store.people;
  const planets = store.planets;
  const vehicles = store.vehicles;

  return (
    <div>
      <h1 className="title text-danger">Characters</h1>
      <div className="mx-5 p-5 card-container">
        {people.map((person, idx) => {
          return (
            <div className="my-card" key={idx}>
              <Card person={person} id={idx} />
            </div>
          );
        })}
      </div>

      <h1 className="title text-danger">Planets</h1>
      <div className="mx-5 p-5 card-container">
        {planets.map((planet, idx) => {
          return (
            <div className="my-card" key={idx}>
              <Card planet={planet} id={idx} />
            </div>
          );
        })}
      </div>

      <h1 className="title text-danger">Vehicles</h1>
      <div className="mx-5 p-5 card-container">
        {vehicles.map((vehicle, idx) => {
          return (
            <div className="my-card" key={idx}>
              <Card vehicle={vehicle} id={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
