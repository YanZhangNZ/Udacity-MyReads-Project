import React from 'react'
import CurrentReading from './CurrentReading'
import WantToRead from './WantToRead'
import Read from './Read'
import {Link} from 'react-router-dom'

function BookShelves(props) {
    return (
        <div className=" search-books-results">

            <CurrentReading books={props.books} onUpdateBooks={props.onUpdateBooks}/>
            <WantToRead books={props.books} onUpdateBooks={props.onUpdateBooks}/>
            <Read books={props.books} onUpdateBooks={props.onUpdateBooks}/> 

            <div className="open-search">
                <Link to="/search">Add a Book</Link>
            </div>
        </div>

        
    )
}

export default BookShelves;
