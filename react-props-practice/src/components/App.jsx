import React from "react";
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";
import contacts from "../contacts.js";

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<Avatar imgURL="https://media.istockphoto.com/vectors/unknown-person-silhouette-whith-tie-vector-id521573881?k=20&m=521573881&s=612x612&w=0&h=aN-SJp9juUxAF4kpfJinHHLTYveU-qhzL3w7pcw-5KU=" />
			<Card
				name={contacts[0].name}
				imgURL={contacts[0].imgURL}
				phone={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				imgURL={contacts[1].imgURL}
				phone={contacts[1].phone}
				email={contacts[1].email}
			/>
			<Card
				name={contacts[2].name}
				imgURL={contacts[2].imgURL}
				phone={contacts[2].phone}
				email={contacts[2].email}
			/>
		</div>
	);
}

export default App;
