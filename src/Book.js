import React, { Component } from 'react'
import './App.css'

export default class Book extends Component {
    render() {
        var dv = 0;
        if (this.props.book.shelf === 'currentlyReading') {
            dv = 1;
        } else if (this.props.book.shelf === 'wantToRead') {
            dv = 2;
        } else if (this.props.book.shelf === 'read') {
            dv = 3;
        }
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')'
                    }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.onChangeShelf(this.props.book, e.target.selectedIndex, this.props.fromSearch)}>
                            <option value="none" selected={dv === 0}>none</option>
                            <option value="currentlyReading" selected={dv === 1}>Currently Reading</option>
                            <option value="wantToRead" selected={dv === 2}>Want to Read</option>
                            <option value="read" selected={dv === 3}>Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}