import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const shelfType=['currentlyReading','wantToRead','read'];

function BookShelves(props) {
    return (
        <div className=" search-books-results">

            {shelfType.map((shelf,index)=>(
                <div key={index} className="bookshelf">
                    <h3>{shelf}</h3>
                    <Shelf shelf={shelf} books={props.books} onUpdateBooks={props.onUpdateBooks} />
                </div>
            ))}

            <div className="open-search">
                <Link to="/search">Add a Book</Link>
            </div>
        </div>

        
    )
}
//prop-type
// BookShelves.propTypes = {
//     books:PropTypes.Object,
//     onUpdateBooks:PropTypes.function
// }

export default BookShelves;
