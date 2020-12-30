const TeamsList = ({ teams }) => (
	<>
		<h3>Teams:</h3>
		<h3>Team 1:</h3>
		<ul>
			{teams.team1.map((player, index) => {
				return <li key={index}> {player.name}</li>;
			})}
		</ul>
		<h3>Team 2:</h3>
		<ul>
			{teams.team2.map((player, index) => {
				return <li key={index}> {player.name}</li>;
			})}
		</ul>
	</>
);

export default TeamsList;
