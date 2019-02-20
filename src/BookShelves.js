import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

const shelfType=['currently Reading','want To Read','read'];

function BookShelves(props) {
    debugger;
    return (
        <div className=" search-books-results">

            {shelfType.map((shelf,index)=>(
                <div key={index} className="bookshelf">
                    <h2>{shelf.charAt(0).toUpperCase() + shelf.slice(1)}</h2>
                    <Shelf shelf={shelf.replace(/\s/g, '')} books={props.books} onUpdateBooks={props.onUpdateBooks} />
                    
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
