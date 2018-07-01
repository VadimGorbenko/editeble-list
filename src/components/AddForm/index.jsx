import React, {Component} from 'react';
import {connect} from 'react-redux'


class AddForm extends Component{
	render(){
		return(
			<form onSubmit = {this.addFIO.bind(this)}>
	      <label>Фамилия
	        <input type="text" ref="lastName" defaultValue="" placeholder="Фамилия" required="required" pattern="^[А-Яа-яЁё\s]+$" />
	      </label>
	      <label>Имя
	        <input type="text" ref="firstName" defaultValue="" placeholder="Имя" required="required" pattern="^[А-Яа-яЁё\s]+$"/>
	      </label>
	      <label>Отчество
	        <input type="text" ref="middleName" defaultValue="" placeholder="Отчество" required="required" pattern="^[А-Яа-яЁё\s]+$" />
	      </label>
	      <input type="submit" defaultValue="Добавить" />
   		</form>
		)
	}
	
	addFIO(event){
		event.preventDefault()
		let newFIO = {
			"id":new Date(),
			"lastName":this.refs.lastName.value,
			"firstName":this.refs.firstName.value,
			"middleName":this.refs.middleName.value
		}
		this.props.onAddFIO(newFIO)
		this.refs.lastName.value = this.refs.firstName.value = this.refs.middleName.value = ""
	}
}

export default connect(
	state => ({
		testStore:state
	}),
	dispatch => ({
		onAddFIO: (newFIO) =>{
			dispatch({type:"ADD_FIO", payload:newFIO})
		}
	})
)(AddForm)