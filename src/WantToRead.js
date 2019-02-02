import React from 'react'
import BookInfo from './BookInfo'

function WantToRead (props){
 return(
 	<div className="bookshelf">
   	 <h3>Want to Reading</h3>
     <ol className="books-grid">
     	{props.books.map((book,index)=> (book.shelf === 'wantToRead'&&
   										<BookInfo key={index} book={book}/>)
	)}
  	 </ol> 
   	</div>
 )
}
export default WantToRead;