import React from 'react'
import * as BooksAPI from './BooksAPI'

function BookChanger(props){

  const handleBookChanger = (e) => {
    e.preventDefault();
    BooksAPI.update(props.book, e.target.value).then(BooksAPI.get(props.book.id).then(res=> props.onUpdateBooks(res)))
  }

    return(

      <div className="book-shelf-changer">

        <select value={props.book.shelf ?props.book.shelf:'none'} onChange={handleBookChanger}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option> 
        </select>
        
      </div>
    )
  }

export default BookChanger;