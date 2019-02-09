import React from 'react'
import BookInfo from './BookInfo'

function Read (props){
 return(
 	<div className="bookshelf">
   	 <h3>Read</h3>
     <ol className="books-grid">
     	{props.books.map((book,index)=> (book.shelf === 'read'&&
   										<BookInfo key={index} book={book} onStateChange={props.onStateChange}/>)
	)}
  	 </ol> 
   	</div>
 )
}
export default Read;