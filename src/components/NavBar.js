import ResetButton from "./ResetButton";

const NavBar = ({ name }) => (
	<>
		<header className="nav-header">
			<section className="title">
				<h1 className="logo">AutoTeam</h1>
				<h2 className="logo">Football Team Picker</h2>
			</section>
			<nav className="nav-main">
				<ResetButton name={"Restart"} />
			</nav>
		</header>
	</>
);

export default NavBar;
