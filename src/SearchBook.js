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

    if(e.target.value !== '') BooksAPI.search(e.target.value)
          .then(res => this.setState({books:[  ...res]},()=>{console.log('search',this.state.books)}))
          .catch(err=>console.log(err));
    else this.setState({books:[]});
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

        {this.state.books && <div className=" search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book,index)=>
              <BookInfo book={book} key={index} onUpdateBooks={this.props.onUpdateBooks}/>  
            )}
          </ol>
        </div>}

      </div>
    )
  }
}
