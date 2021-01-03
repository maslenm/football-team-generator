const TeamsList = ({ teams }) => (
	<>
		<section className="teams-page">
			<header className="teams-page-header">
				<h3>Teams :</h3>
			</header>
		</section>
		<section className="teams">
			<header className="teams-header">
				<h3>Team 1 :</h3>
			</header>
			<ul className="teams-list-1">
				{/* maps over the team property of teams state */}
				{teams.team1.map((player, index) => {
					return <li key={index}> {player.name}</li>;
				})}
			</ul>
		</section>
		<section className="teams">
			<header className="teams-header">
				<h3>Team 2 :</h3>
			</header>
			<ul className="teams-list-2">
				{teams.team2.map((player, index) => {
					return <li key={index}> {player.name}</li>;
				})}
			</ul>
		</section>
	</>
);

export default TeamsList;
