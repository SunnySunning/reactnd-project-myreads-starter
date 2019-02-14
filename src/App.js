import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch'
import BookList from './BookList'

class BooksApp extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        books:[]
      };
  }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        })
    }

    onChangeShelf(book,shelfIndex,fromSearch){
        var bookId = book.id;
        var bookFind;
        var books = this.state.books;
        if (fromSearch) {
            bookFind = book;
            books.push(bookFind)
        } else {
            var filterBooks = this.state.books.filter((book)=>{
                return book.id === bookId
            })
            if (filterBooks.length > 0){
                bookFind = filterBooks[0];
            }
        }
        if (shelfIndex === 0) {
        } else if (shelfIndex === 1) {
            bookFind.shelf = 'currentlyReading';
        } else if (shelfIndex === 2) {
            bookFind.shelf = 'wantToRead';
        } else if (shelfIndex === 3) {
            bookFind.shelf = 'read';
        }
        this.setState({
            books : this.state.books
        });
        BooksAPI.update(bookFind, bookFind.shelf);
    }

  render() {
    return (
      <div className="app">
          <Route path="/" exact render={() => (
              <BookList books={this.state.books} onChangeShelf={(book,shelfIndex,fromSearch)=>this.onChangeShelf(book,shelfIndex,fromSearch)}/>
          )} />
          <Route path="/search" render={() => (
              <BookSearch booksOnShelf={this.state.books} onChangeShelf={(book,shelfIndex,fromSearch)=>this.onChangeShelf(book,shelfIndex,fromSearch)}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
