import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddPlayer from "./AddPlayer";
import TeamsList from "./TeamsList";

const App = () => (
	<Router>
		<>
			<NavBar />
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/addplayer">
				<AddPlayer />
			</Route>
			<Route exact path="/teamslist">
				<TeamsList />
			</Route>
		</>
	</Router>
);

export default App;
