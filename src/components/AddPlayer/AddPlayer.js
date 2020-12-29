import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.addPlayer = this.addPlayer.bind(this);
	}

	handleChange(e) {
		this.setState({ playerName: e.currentTarget.value });
	}

	addPlayer(e) {
		e.preventDefault();

		const { onSubmit } = this.props;
		onSubmit({ ...this.state });
		this.setState({ playerName: "" });
	}

	render() {
		const { playerName } = this.state;
		return (
			<>
				<h1>ENTER PLAYER NAMES:</h1>
				<form onSubmit={this.addPlayer}>
					<label>Player #? Name:</label>
					<input
						type="text"
						name="playerName"
						placeholder="Enter name"
						value={playerName}
						onChange={this.handleChange}
					/>
					<button>Add</button>
				</form>
			</>
		);
	}
}

export default AddPlayer;
