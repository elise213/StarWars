import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Character Name</h5>
        </div>
        {/* <ul class="list-group list-group-flush"> */}
        <li className="list-group-item border-0">Gender:</li>
        <li className="list-group-item border-0">Hair Color:</li>
        <li className="list-group-item border-0">Eye Color:</li>
        {/* </ul> */}
        <div className="card-body d-flex justify-content-between">
          
          <Link to="/demo">
            <a href="#" class="btn btn-outline-primary">
              Learn More!
            </a>
          </Link>
          <button type="button" class="btn btn-outline-warning">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
