import AddPlayer from "./AddPlayer";
import { connect } from "react-redux";
import history from "../../history";
import { addPlayer, createTeams } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (data) => dispatch(addPlayer(data)),
		handleCreate: (data) => {
			dispatch(createTeams(data));
			history.push("/teamslist");
		},
	};
};

export default connect(null, mapDispatchToProps)(AddPlayer);
