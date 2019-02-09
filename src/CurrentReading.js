import React from 'react'
import BookInfo from './BookInfo'

function CurrentReading (props){
 return(
 	<div className="bookshelf">
   	 <h3>Currently Reading</h3>
     <ol className="books-grid">
     	{props.books.map((book,index)=> (book.shelf === 'currentlyReading'&&
   										<BookInfo key={index} book={book} onStateChange={props.onStateChange}/>)
	)}
  	 </ol> 
   	</div>
 )
}
export default CurrentReading;