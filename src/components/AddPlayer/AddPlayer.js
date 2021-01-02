import { Component } from "react";
import PlayerList from "../PlayerList";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.addPlayer = this.addPlayer.bind(this);
		this.handleCreate = this.handleCreate.bind(this);
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

	handleCreate() {
		this.props.handleCreate(this.props.data);
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
					<button className="greenButton">Add</button>
				</form>
				<button className="greenButton" onClick={this.handleCreate}>
					Create Teams
				</button>
				<PlayerList />
			</>
		);
	}
}

export default AddPlayer;
