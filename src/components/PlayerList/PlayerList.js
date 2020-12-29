import { Component } from "react";

const PlayerList = ({ players }) => {
	return (
		<>
			<h3>Current Players:</h3>
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
