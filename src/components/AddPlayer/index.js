import AddPlayer from "./AddPlayer";
import { connect } from "react-redux";
import history from "../../history";
import { addPlayer, createTeams } from "../../data/actions/state";

const mapStateToProps = (state) => {
	return {
		playersAdded: state.playersAdded,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (data) => dispatch(addPlayer(data)),
		handleCreate: (data) => {
			dispatch(createTeams(data));
			history.push("/teamslist");
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
