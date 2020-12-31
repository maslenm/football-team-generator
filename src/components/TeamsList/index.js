import TeamsList from "./TeamsList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		teams: state.teams,
	};
};

export default connect(mapStateToProps)(TeamsList);
