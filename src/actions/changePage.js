export const changePage = (pageNumber) => {
	return{
		type: "CHANGE_PAGE",
		payload: pageNumber
	}
}