import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context) 
  const params = useParams()
  console.log(params)
 let type=window.location.href.includes ("person") ? "person" : "planet"
  let item = type == "person" ? actions.getPerson (params.index) : actions.getPlanet (params.index)
	// console.log(params.key)
  let fields = type == "person" ? 
  <div className="container row mx-5 px-5">
  <div className="col-6">IMAGE</div>
  <div className="col-6">
    <h1>{item.name}</h1>
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
    <div className="col-2 text-danger">{item.name}</div>
    <div className="col-2 text-danger">{item.birth_year}</div>
    <div className="col-2 text-danger">{item.gender}</div>
    <div className="col-2 text-danger">{item.height}</div>
    <div className="col-2 text-danger">{item.skin_color}</div>
    <div className="col-2 text-danger">{item.eye_color}</div>
  </div>
</div> :    
 <div className="container row mx-5 px-5">
      <div className="col-6">IMAGE</div>
      <div className="col-6">
        <h1>{item.name}</h1>
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
        <div className="col-2 text-danger">{item.name}</div>
        <div className="col-2 text-danger">{item.orbit}</div>
        <div className="col-2 text-danger">{item.gravity}</div>
        <div className="col-2 text-danger">{item.terrain}</div>
        <div className="col-2 text-danger">{item.surface_water}</div>
        <div className="col-2 text-danger">{item.population}</div>
      </div>
    </div>
  return (
    <div>
    {fields}
    </div>
  );
};
