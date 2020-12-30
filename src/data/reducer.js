const addPlayerReducer = (state, action) => {
	if (state.playerName !== "" && state.players.length < 10)
		return {
			...state,
			players: [...state.players, action.payload],
		};
	return state;
};

const createTeamsReducer = (state, action) => {
	return { ...state, teams: [...state.players] };
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_PLAYER":
			return addPlayerReducer(state, action);
		case "CREATE_TEAMS":
			return createTeamsReducer(state, action);
		default:
			return state;
	}
};

export default reducer;
