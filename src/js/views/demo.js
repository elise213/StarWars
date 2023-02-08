import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container row mx-5 px-5">
      {/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}

      <div className="col-6">IMAGE</div>
      <div className="col-6">
        <h1>Name</h1>
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
