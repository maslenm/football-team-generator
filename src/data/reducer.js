const addPlayerReducer = (state, action) => {
	if (state.playerName !== "" && state.players.length < 10)
		return {
			...state,
			players: [...state.players, action.payload],
		};
	return state;
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_PLAYER":
			return addPlayerReducer(state, action);
		default:
			return state;
	}
};

export default reducer;
