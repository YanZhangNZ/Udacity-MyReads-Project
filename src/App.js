import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import CurrentReading from './CurrentReading'
import WantToRead from './WantToRead'
import Read from './Read'
import SearchBook from './SearchBook'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
    	books:[]
    } 
  
  componentDidMount = () => {  
  	BooksAPI.getAll().then(books => {
    	this.setState({books:[...books]},()=>{console.log(this.state)})
    });
  }

  render() {
    return (
      <div className="app">
      
      	<header className="list-books-title">
      		<h1>My Read</h1>
      	</header>

        <div className=" search-books-results">
   			<CurrentReading books={this.state.books} />
      		<WantToRead books={this.state.books} />
      		<Read books={this.state.books} />
        </div>
      	
       <Route path="/search" component={SearchBook} />
     

	  </div>
    )
  }
}

export default BooksApp
