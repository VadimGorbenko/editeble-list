import React, {Component} from 'react';
import AddForm from "./components/AddForm/"
import TableList from "./components/TableList/"

export default class App extends Component{
	render(){
		return(
			<div>
				<AddForm/>
				<TableList/>
			</div>
		)
	}
}