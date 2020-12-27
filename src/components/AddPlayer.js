import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
			players: ["bob", "charlie", "luke"],
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

		this.setState({
			players: [...this.state.players, playerName],
			playerName: "",
		});
	}

	/* this.setState({ players: [...this.state.players, newPlayer] });
		const { onSubmit } = this.props;
		onSubmit(); */

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
				<ul>
					{players.map((player) => {
						return <li key={player}> {player}</li>;
					})}
				</ul>
			</>
		);
	}
}

export default AddPlayer;
