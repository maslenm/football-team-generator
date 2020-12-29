import AddPlayer from "./AddPlayer";
import { connect } from "react-redux";
import { addPlayer } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (data) => dispatch(addPlayer(data)),
	};
};

export default connect(null, mapDispatchToProps)(AddPlayer);
