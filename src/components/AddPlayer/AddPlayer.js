import { Component } from "react";
import PlayerList from "../PlayerList";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
			playersAdded: this.props.playersAdded,
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
		const { playersAdded } = this.props;
		return (
			<>
				{!playersAdded ? (
					<section className="addPlayer">
						<header className="addPlayer-header">
							<h2>Enter Your Players :</h2>
						</header>
						<form className="addPlayer-content" onSubmit={this.addPlayer}>
							<label className="addPlayerInput">Name:</label>
							<input
								className="addPlayerInput"
								type="text"
								name="playerName"
								placeholder="Enter name"
								value={playerName}
								onChange={this.handleChange}
								required
							/>

							<button className="greenButton add">Add</button>
						</form>
					</section>
				) : (
					<button className="greenButton" onClick={this.handleCreate}>
						Create Teams
					</button>
				)}
				<PlayerList />
			</>
		);
	}
}

export default AddPlayer;
