import { useState } from "react";
import "./App.css";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [display, setDisplay] = useState(false);

	const handleFirstNameChange = (e) => {
		// hide the display on input change
		setDisplay(false);
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		// hide the display on input change
		setDisplay(false);
		setLastName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisplay(true);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<>
					<label htmlFor="firstName">
						{" "}
						First Name:
						<input
							type="text"
							name="firstName"
							id="firstName"
							required
							value={firstName}
							onChange={handleFirstNameChange}
						/>
					</label>
					<label htmlFor="lastName">
						Last Name:
						<input
							type="text"
							name="lastName"
							id="lastName"
							required
							value={lastName}
							onChange={handleLastNameChange}
						/>
					</label>
				</>
				<button type="submit">Submit</button>
			</form>
			{display && (
				<div>
					Full Name: {firstName} {lastName}
				</div>
			)}
		</div>
	);
}

export default App;
