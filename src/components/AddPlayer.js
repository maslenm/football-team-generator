import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
			players: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.addPlayer = this.addPlayer.bind(this);
	}

	handleChange(e) {
		this.setState({ playerName: e.currentTarget.value });
	}

	addPlayer(e) {
		e.preventDefault();

		const { players, playerName } = this.state;

		if (playerName !== "" && players.length < 10) {
			this.setState({
				players: [...players, playerName],
				playerName: "",
			});
		}
	}

	render() {
		const { playerName, players } = this.state;
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
				<h3>Current Players:</h3>
				{players.length === 0 ? (
					<p>No players have been added.</p>
				) : (
					<ul>
						{players.map((player, index) => {
							return <li key={index}> {player}</li>;
						})}
					</ul>
				)}
			</>
		);
	}
}

export default AddPlayer;
