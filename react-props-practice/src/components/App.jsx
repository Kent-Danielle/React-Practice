import React from "react";
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";
import contacts from "../contacts.js";

function createCard(contact, index) {
	return (
		<Card
			id={index + 1}
			key={index}
			name={contact.name}
			imgURL={contact.imgURL}
			phone={contact.phone}
			email={contact.email}
		/>
	);
}

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<Avatar imgURL="https://media.istockphoto.com/vectors/unknown-person-silhouette-whith-tie-vector-id521573881?k=20&m=521573881&s=612x612&w=0&h=aN-SJp9juUxAF4kpfJinHHLTYveU-qhzL3w7pcw-5KU=" />
			{contacts.map((contact, index) => createCard(contact, index))}
		</div>
	);
}

export default App;
