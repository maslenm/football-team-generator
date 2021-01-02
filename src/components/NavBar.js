import { Link } from "react-router-dom";

const NavBar = () => (
	<>
		<header className="nav-header">
			<section className="title">
				<h1>AutoTeam</h1>
				<h2>Football Team Picker</h2>
			</section>
			<nav className="nav-main">
				<Link to="/" className="restartButton">
					Restart
				</Link>
			</nav>
		</header>
	</>
);

export default NavBar;
