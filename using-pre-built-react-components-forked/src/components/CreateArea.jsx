import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";

function CreateArea(props) {
	const [isOpened, setIsOpened] = useState(false);

	function handleInputClick() {
		setIsOpened(!isOpened);
	}

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	return (
		<div>
			<Fade in={true}>
				<form className="create-note">
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
						style={{ display: isOpened ? "inline-block" : "none" }}
					/>

					<textarea
						name="content"
						onChange={handleChange}
						onClick={handleInputClick}
						value={note.content}
						placeholder="Take a note..."
						rows={isOpened ? "3" : "1"}
					/>
					<Zoom in={isOpened}>
						<Fab onClick={submitNote}>
							<AddIcon />
						</Fab>
					</Zoom>
				</form>
			</Fade>
		</div>
	);
}

export default CreateArea;
