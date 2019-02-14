import React,{ Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

export default class BookSearch extends Component {

    constructor(props){
        super(props)
        this.state = {
            query : '',
            books : []
        }
    }

    updateQuery = (query) => {
        if (!query) {
            this.setState({query: '', books: []})
        } else {
            this.setState({ query: query.trim() })
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    books = []
                }
                books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                this.setState({books})
            })
        }
    }

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map((book)=>(
                                <li>
                                    <Book book={book}
                                          onChangeShelf={() => this.props.onChangeShelf}
                                          fromSearch = {1}
                                          {...this.props}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}