import React from "react";
import { Link } from "react-router-dom";

const Card = ({person, c_id}) => {
  console.log(person)
  return (
    <div className="container-card mt-5">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
        </div>
        {/* <ul class="list-group list-group-flush"> */}
        <li className="list-group-item border-0">{person.gender}</li>
        <li className="list-group-item border-0">{person.hair_color}</li>
        <li className="list-group-item border-0">{person.eye_color}</li>
        {/* </ul> */}
        <div className="card-body d-flex justify-content-between">
          
          <Link to={"/demo" + c_id}>
            <span href="#" className="btn btn-outline-primary">
              Learn More!
            </span>
          </Link>
          <button type="button" className="btn btn-outline-warning">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
