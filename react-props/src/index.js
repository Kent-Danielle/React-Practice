import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<img src={props.src} alt="avatar_img" />
			<p>{props.phoneNum}</p>
			<p>{props.email}</p>
		</div>
	);
}

root.render(
	<div>
		<h1>My Contacts</h1>
		<Card
			name="Beyonce"
			src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
			phoneNum="+123 456 789"
			email="b@beyonce.com"
		/>
    <Card
			name="Shakira"
      src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg"
			phoneNum="+123 420 696"
			email="s@shakira.com"
		/>
	</div>
);
