export const addPlayer = (data) => {
	return {
		type: "ADD_PLAYER",
		payload: {
			name: data.playerName,
		},
	};
};

export const createTeams = (players) => {
	return {
		type: "CREATE_TEAMS",
		payload: {
			players,
		},
	};
};

export const reset = () => {
	return {
		type: "RESET",
	};
};
