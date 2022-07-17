import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes.js";

console.log(notes)
function App() {
	return (
		<div>
			<Header />
			{notes.map((note) => (
				<Note key={note.key} title={note.title} content={note.content} />
			))}
			<Footer />
		</div>
	);
}

export default App;
