import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerName: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ playerName: e.currentTarget.value });
	}

	render() {
		let { playerName } = this.state;
		return (
			<>
				<h1>ENTER PLAYER NAMES:</h1>
				<form>
					<label>Player #? Name:</label>
					<input type="text" onChange={this.handleChange} value={playerName} />
				</form>
			</>
		);
	}
}

export default AddPlayer;
