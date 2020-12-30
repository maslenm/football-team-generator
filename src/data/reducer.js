const addPlayerReducer = (state, action) => {
	if (state.playerName !== "" && state.players.length < 10)
		return {
			...state,
			players: [...state.players, action.payload],
		};
	return state;
};

/* https://www.youtube.com/watch?v=myL4xmtAVtw (JavaScript Problem: Shuffling an Array)(All Things JavaScript, LLC) */

let arrayShuffle = (arr) => {
	let newPos, temp;

	for (let i = arr.length - 1; i > 0; i--) {
		//math.floor rounds down random value
		newPos = Math.floor(Math.random() * (i + 1));
		temp = arr[i];
		arr[i] = arr[newPos];
		arr[newPos] = temp;
	}
	return arr;
};

const createTeams = (teams) => {
	let midPoint = Math.floor(teams.length / 2);

	let team1 = teams.slice(0, midPoint);

	let team2 = teams.slice(midPoint);
	return { team1, team2 };
};

const createTeamsReducer = (state, action) => {
	return {
		...state,
		teams: createTeams(arrayShuffle([...state.players])),
	};
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
