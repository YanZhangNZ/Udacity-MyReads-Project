import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import { Route, Link,Switch} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: [...books] }, () => { console.log(this.state) })
    });
  }

  render() {
    return (
      <div className="app">

        <header className="list-books-title">
          <h1>My Read</h1>
        </header>
        
        <Switch>
          <Route exact path="/" render={() => (<BookShelves books={this.state.books} />)} />
          <Route path="/search" component={SearchBook}></Route>
        </Switch>

      </div>
    )
  }
}

export default BooksApp
