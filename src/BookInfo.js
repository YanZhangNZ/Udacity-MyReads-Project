import React from 'react'
import BookChanger from './BookChanger'


function BookInfo (props) {
  
  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks&&props.book.imageLinks.thumbnail})`}}>
			<BookChanger book={props.book} onUpdateBooks={props.onUpdateBooks}/>
		  </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors.join(', ')}</div>
      </div>
  )
}
export default BookInfo;
