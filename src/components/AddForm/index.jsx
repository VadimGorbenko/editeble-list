import React, {Component} from 'react';

export default class AddForm extends Component{
	render(){
		return(
			<form>
	      <label>Фамилия
	        <input type="text" value="Фамилия" placeholder="Фамилия"/>
	      </label>
	      <label>Имя
	        <input type="text" value="Имя" placeholder="Имя"/>
	      </label>
	      <label>Отчество
	        <input type="text" value="Отчество" placeholder="Отчество"/>
	      </label>
	      <input type="submit" value="Добавить"/>
   		</form>
		)
	}
}