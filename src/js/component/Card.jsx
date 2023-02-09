import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  let typeURL = props.person ? "/component/person/" : "/component/planet/";
  let name = props.person ? props.person.name : props.planet.name;
  let personProp = props.person ? (
    <div>
      <div className="card-body">
        <h5 className="card-title">{props.person.name}</h5>
      </div>
      <li className="list-group-item border-0">{props.person.gender}</li>
      <li className="list-group-item border-0">{props.person.hair_color}</li>
      <li className="list-group-item border-0">{props.person.eye_color}</li>
    </div>
  ) : (
    ""
  );

  let planetProp = props.planet ? (
    <div>
      <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
      </div>
      <li className="list-group-item border-0">{props.planet.gravity}</li>
      <li className="list-group-item border-0">{props.planet.climate}</li>
      <li className="list-group-item border-0">{props.planet.terrain}</li>
    </div>
  ) : (
    ""
  );

  return (
    <div className="container-card mt-5">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        {props.person ? personProp : ""}
        {props.planet ? planetProp : ""}
        <div className="card-body d-flex justify-content-between">
          <Link to={typeURL + props.id}>
            <span href="#" className="btn btn-outline-primary">
              Learn More!
            </span>
          </Link>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => actions.addFavorite(name)}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
