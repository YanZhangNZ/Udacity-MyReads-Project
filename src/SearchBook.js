import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookInfo from './BookInfo'

export default class SearchBook extends Component {
  state = {
    books:[]
  }

  

    handleSearch = (e) => {
    e.preventDefault();
   BooksAPI.search(e.target.value)
          .then(res => this.setState({books:[...res]}))
          .catch(err=>console.log(err));
            console.log('books',this.state.books);  
  }

  render(){
  	return(
      <div style={{backgroundColor: "lightgrey"}}>
        
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">               
            <input type="text" placeholder="Search by title or author" value={this.state.keyWord} onChange={this.handleSearch}/>
          </div>        
        </div>

        <div className=" search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book,index)=>
              <BookInfo book={book} key={index} onUpdateBooks={this.props.onUpdateBooks}/>  
            )}
          </ol>
        </div>
      </div>
    )
  }
}
