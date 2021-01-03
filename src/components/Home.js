import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => (
	<>
		<section className="welcome">
			<header className="welcome-header">
				<h2>What is Auto Team?</h2>
			</header>
			<article className="welcome-content">
				<p>
					This site allows you to enter the names of 10 people and it will
					randomly divide them into 2 teams of equal size.
				</p>
			</article>
		</section>
		<section className="instruction">
			<header className="instruction-header">
				<h2>Instructions :</h2>
			</header>
			<ul className="instruction-list">
				<li>Enter 10 player names</li>
				<li>Submit your entries</li>
				<li>View Randomly generated teams</li>
				<li>Hit Restart to wipe your players and start again</li>
			</ul>
		</section>
		<section className="start">
			<Link to="/addplayer" className="greenButton">
				Start
			</Link>
		</section>
		<Footer />
	</>
);

export default Home;
