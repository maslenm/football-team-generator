export const addPlayer = (data) => {
	return {
		type: "ADD_PLAYER",
		payload: {
			name: data.playerName,
		},
	};
};
