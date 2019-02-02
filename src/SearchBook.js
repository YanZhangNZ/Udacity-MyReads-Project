import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

export default class SearchBook extends Component {
  state = {
  	keyWord:''
  }

  handleSearch = (e) => {
    e.preventDefault();
	this.setState({keyWord:e.target.value});
    const books = BooksAPI.search(this.state.keyWord,8);
    console.log(books);
  }

  render(){
  	return(    	
		<div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">               
                <input type="text" placeholder="Search by title or author" value={this.state.keyWord} onChange={this.handleSearch}/>
              </div>
			</div>
		</div>
    )
  }
}
