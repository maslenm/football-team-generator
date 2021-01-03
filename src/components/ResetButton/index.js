import { connect } from "react-redux";
import ResetButton from "./ResetButton";
import { reset } from "../../data/actions/state";
import history from "../../history";

const mapDispatchToProps = (dispatch) => ({
	handleReset: () => {
		dispatch(reset());
		history.push("/");
	},
});

export default connect(null, mapDispatchToProps)(ResetButton);
