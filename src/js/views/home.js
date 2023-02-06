import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx"

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadSomeData();
  }, []);
  console.log(store.people)
  console.log(store.planets)
  console.log(store.vehicles)

  return (
  <div className="m-5">
  <span className="title color-red">Characters</span>
  <Card />
  </div>
  )};
