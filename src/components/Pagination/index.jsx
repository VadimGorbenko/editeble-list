import React, {Component} from 'react';
import {Link} from 'react-router-dom'
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
          <Link to={`${i}`} className="list-block__pagination-link" aria-label={`Перейти на страницу № ${i}`} onClick={this.changePage.bind(this)}>{i}</Link>
        </li>
      )
    }
    return paginationElems
  }
  changePage(event){
    let pageNumber = event.target.textContent
    this.props.onChangePage(pageNumber)
  }
	render(){
    if (this.state.elemsCounter>10) {
  		return(
          <ul className="list-block__pagination">
            {this.showPagesNumber()}
          </ul>
  		)
    }
    else return(null)
  }
}

function mapStateToProps (state){
  return{
    list: state.list,
    pageNumber: state.pageNumber
  }
}

export default connect(mapStateToProps,
  dispatch => ({
    onChangePage: (pageNumber) =>{
      dispatch({type:"CHANGE_PAGE", payload:pageNumber})
    }
  }))(Pagination)