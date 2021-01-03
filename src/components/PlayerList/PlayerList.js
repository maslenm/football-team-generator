const PlayerList = ({ players }) => {
	return (
		<>
			<section className="players">
				<header className="players-header">
					<h2>Current Players :</h2>
				</header>
				{/* if no players added display message, else display current list, maps over state.players */}
				{players.length === 0 ? (
					<p className="players-list-none">No players have been added.</p>
				) : (
					<ul className="players-list">
						{players.map((player, index) => {
							return <li key={index}> {player.name}</li>;
						})}
					</ul>
				)}
			</section>
		</>
	);
};

export default PlayerList;
