import React, {Component} from 'react';
import AddForm from "./components/AddForm/"
import TableList from "./components/TableList/"
import Pagination from "./components/Pagination/"

export default class App extends Component{
	render(){
		return(
			<div>
				<AddForm/>
				<TableList/>
				<Pagination/>
			</div>
		)
	}
}