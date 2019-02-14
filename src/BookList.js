import React,{ Component } from 'react'
import './App.css'
import Book from './Book'
import {Link} from 'react-router-dom'

export default class BookList extends Component {
    render(){
        return(

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        this.props.books.filter((book)=>{
                                            return book.shelf === 'currentlyReading'
                                        }).map((filterBook)=>(
                                            <li>
                                                <Book book={filterBook}
                                                      onChangeShelf={() => this.props.onChangeShelf}
                                                      fromSearch = {0}
                                                      {...this.props}
                                                />
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        this.props.books.filter((book)=>{
                                            return book.shelf === 'wantToRead'
                                        }).map((filterBook)=>(
                                            <li>
                                                <Book book={filterBook}
                                                      onChangeShelf={() => this.props.onChangeShelf}
                                                      fromSearch = {0}
                                                      {...this.props}
                                                />
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        this.props.books.filter((book)=>{
                                            return book.shelf === 'read'
                                        }).map((filterBook)=>(
                                            <li>
                                                <Book book={filterBook}
                                                      onChangeShelf={() => this.props.onChangeShelf}
                                                      fromSearch = {0}
                                                      {...this.props}
                                                />
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/search' className="open-search">Add a book</Link>
            </div>
        )
    }
}