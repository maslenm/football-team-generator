import Shuffle from "./Shuffle";
import { connect } from "react-redux";
import { createTeams } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
	return {
		handleCreate: (data) => {
			dispatch(createTeams(data));
		},
	};
};

export default connect(null, mapDispatchToProps)(Shuffle);
