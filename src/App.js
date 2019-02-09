import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {debugger;
    BooksAPI.getAll().then(books => {
      this.setState({ books: [...books] }, () => { console.log(this.state) })
    });
  }

  updateBooks = () => {
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
          <Route exact path="/" render={() => (<BookShelves books={this.state.books} onUpdateBooks={this.updateBooks}/>)} />
          <Route path="/search" component={SearchBook}></Route>
        </Switch>

      </div>
    )
  }
}

export default App
