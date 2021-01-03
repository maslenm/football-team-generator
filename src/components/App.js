import { Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddPlayer from "./AddPlayer";
import TeamsList from "./TeamsList";
import history from "../history";

const App = () => (
	<Router history={history}>
		<>
			<main className="container">
				<NavBar />

				<section className="card">
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/addplayer">
						<AddPlayer />
					</Route>
					<Route exact path="/teamslist">
						<TeamsList />
					</Route>
				</section>
			</main>
		</>
	</Router>
);

export default App;
