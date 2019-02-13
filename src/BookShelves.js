import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

const shelfType=['currentlyReading','wantToRead','read'];

function BookShelves(props) {
    return (
        <div className=" search-books-results">

            {shelfType.map((shelf,index)=>(
                <div key={index} className="bookshelf">
                    <h2>{shelf}</h2>
                    <Shelf shelf={shelf} books={props.books} onUpdateBooks={props.onUpdateBooks} />
                </div>
            ))}

            <div className="open-search">
                <Link to="/search">Add a Book</Link>
            </div>
        </div>

        
    )
}
//prop-type;still have no idea about propsType in stateless functional component;
BookShelves.propTypes = {
    props:React.PropTypes.any
}

export default BookShelves;
