import React, {Component} from 'react';
import {connect} from 'react-redux'

class Pagination extends Component{
  state={
    elemsCounter: this.props.list.length
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.list.length !== this.props.list.length) this.setState({
      elemsCounter: nextProps.list.length
    })
  }
  showPagesNumber(){
    let paginationElems = []
    for (let i = 1; i <= Math.ceil(this.props.list.length/10); i++) {
      paginationElems.push(
        <li key={i} className="list-block__pagination-item">
          <button className="list-block__pagination-link" aria-label={`Перейти на страницу № ${i}`}>{i}</button>
        </li>
      )
    }
    return paginationElems
  }
	render(){
    if (this.state.elemsCounter>10) {
  		return(
          <ul className="list-block__pagination">
            <li className="list-block__pagination-item">
              <button className="list-block__pagination-link" aria-label="Предыдущая страница">Предыдущая</button>
            </li>
            {this.showPagesNumber()}
            <li className="list-block__pagination-item">
              <button className="list-block__pagination-link" aria-label="Следующая страница">Следующая</button>
            </li>
          </ul>
  		)
    }
    else return(null)
  }
}

function mapStateToProps (state){
  return{
    list: state.list
  }
}

export default connect(mapStateToProps)(Pagination)