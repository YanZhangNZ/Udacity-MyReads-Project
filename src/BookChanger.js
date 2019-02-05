import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends Component{
  state={status:''}

  handleBookChanger = (e) => {
    e.preventDefault();
    this.setState({status:e.target.value},()=>{console.log('status',this.state.status)});
    BooksAPI.update(this.props.book,this.props.shelf).then(res=>console.log('update',res))

  } 

  render(){
    return(
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf} onChange={this.handleBookChanger}>
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