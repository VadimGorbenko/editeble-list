import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addFIO} from '../../actions/addFIO.js'


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
	
	addFIO = (event) => {
		event.preventDefault()
		console.log(this)	
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({addFIO:addFIO}, dispatch)
}

export default connect(matchDispatchToProps)(AddForm)