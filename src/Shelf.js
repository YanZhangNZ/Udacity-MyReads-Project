import React from 'react'
import BookInfo from './BookInfo'

function Shelf (props){
 return(
     <ol className="books-grid">
     	{props.books.map((book,index)=> (book.shelf === props.shelf &&
   										<BookInfo key={index} book={book} onUpdateBooks={props.onUpdateBooks}/>)
	)}
  	 </ol> 
 )
}
export default Shelf;