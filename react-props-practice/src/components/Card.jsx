import React from "react";
import Avatar from "./Avatar.jsx"
import Detail from "./Detail.jsx"

function Card(props) {
	return (
		<div>
			<p>{props.id}</p>
			<div className="card">
				<div className="top">
					<h2 className="name">{props.name}</h2>
					<Avatar imgURL={props.imgURL}/>
				</div>
				<div className="bottom">
					<Detail info={props.phone}/>
					<Detail info={props.email}/>
				</div>
			</div>
		</div>
	);
}

export default Card;
