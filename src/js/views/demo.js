import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = ({person, key}) => {
  const { store, actions } = useContext(Context)
  const params=useParams()
	let people=actions.getPerson(parseInt(params.key))
	console.log(params.key)
  return (
    <div className="container row mx-5 px-5">

      <div className="col-6">IMAGE</div>
      <div className="col-6">
        <h1>{people.name}</h1>
        <p className="">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quin voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi
        </p>
      </div>
	  <hr/>
      <div className="row">
        <div className="col-2 text-danger">Name</div>
        <div className="col-2 text-danger">Birth</div>
        <div className="col-2 text-danger">Gender</div>
        <div className="col-2 text-danger">Height</div>
        <div className="col-2 text-danger">Skin Color</div>
        <div className="col-2 text-danger">Eye Color</div>
      </div>
    </div>
  );
};
