import React, {Component} from 'react';

export default class TableList extends Component{
	render(){
		return(
			<ul className="list-block__pagination">
        <li className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label="Предыдущая страница">Предыдущая</button>
        </li>
        <li className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label="Перейти на страницу №1">1</button>
        </li>
        <li className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label="Перейти на страницу №2">2</button>
        </li>
        <li className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label="Перейти на страницу №3">3</button>
        </li>
        <li className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label="Следующая страница">Следующая</button>
        </li>
      </ul>
		)
	}
}
