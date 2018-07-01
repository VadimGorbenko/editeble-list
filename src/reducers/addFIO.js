export default function (state=null, action){
	if (action.type==="ADD_FIO") {
		return action.payload
	}
	else return state
}