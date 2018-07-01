import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addFIO} from '../../actions/addFIO.js'


class AddForm extends Component{
	render(){
		return(
			<form onSubmit = {this.isValid.bind(this)}>
	      <label>Фамилия
	        <input type="text" ref="lastName" defaultValue="Фамилия" placeholder="Фамилия"/>
	      </label>
	      <label>Имя
	        <input type="text" ref="firstName" defaultValue="Имя" placeholder="Имя"/>
	      </label>
	      <label>Отчество
	        <input type="text" ref="middleName" defaultValue="Отчество" placeholder="Отчество"/>
	      </label>
	      <input type="submit" defaultValue="Добавить"/>
   		</form>
		)
	}
	isValid = (event) => {
		event.preventDefault()
		console.log(this)
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({addFIO:addFIO}, dispatch)
}

export default connect(matchDispatchToProps)(AddForm)