import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import NoPageFound from './NoPageFound'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: [...books] }, () => { console.log(this.state) })
    });
  }

  updateBooks = (newbook) => {
    let newBooks = [...this.state.books];
      if(!this.state.books.find(book=>book.id===newbook.id)){
        this.setState({ books: newBooks.push(newbook)}, () => { console.log(this.state.books) });
      }else{
        const index=this.state.books.findIndex(book=>book.id===newbook.id);
        newBooks[index]=newbook;
        this.setState({books:newBooks}, () => { console.log(this.state.books)})
      }
    };

  render() {
    return (
      <div className="app">
        <header className="list-books-title">
          <h1>My Read</h1>
        </header>
        
        <Switch>
          <Route exact path="/" render={() => (<BookShelves books={this.state.books} onUpdateBooks={this.updateBooks}/>)} />
          <Route path="/search" render={()=>(<SearchBook onUpdateBooks={this.updateBooks}/>)} />
          <Route path="*" component={NoPageFound} />
        </Switch>

      </div>
    )
  }
}

export default App
