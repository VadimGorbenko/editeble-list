const initialState = []
initialState.push(window.location.pathname.substr(1) ? window.location.pathname.substr(1):1)
export default function (state=initialState, action){
	if (action.type==="CHANGE_PAGE") {
		return [
			...state,
			action.payload
		]
	}
	return state
}