const PlayerList = ({ players }) => {
	return (
		<>
			<h3>Current Players:</h3>
			{/* if no players added display message, else display current list, maps over state.players */}
			{players.length === 0 ? (
				<p>No players have been added.</p>
			) : (
				<ul>
					{players.map((player, index) => {
						return <li key={index}> {player.name}</li>;
					})}
				</ul>
			)}
		</>
	);
};

export default PlayerList;
