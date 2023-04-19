export const initialState = {
	user: {},
	token: localStorage.getItem('token') || null,
	isLogged: false,
}
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				user: action.payload.user,
				token: action.psyload.token,
				isLogged: true,
			}
		}
		default: {
			return state
		}
	}
}
