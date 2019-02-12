import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends Component{
  state={status:''}

  handleBookChanger = (e) => {
    e.preventDefault();
    this.setState({status:e.target.value},()=>{BooksAPI.update(this.props.book,this.state.status)
    .then(BooksAPI.get(this.props.book.id).then(res=>this.props.onUpdateBooks(res))
      
    )});
  } 

  render(){
    return(
      <div className="book-shelf-changer">

        <select value={this.props.book.shelf?this.props.book.shelf:'none'} onChange={this.handleBookChanger}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option> 
        </select>
        
      </div>
    )
  }
}
export default BookChanger;