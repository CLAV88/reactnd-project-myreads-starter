import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Bookshelf extends Component {
        render() {
            return (
            <div className="app">
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
                                {this.props.readingBooks.map((book) => (
                                    <li>
                                        <div className="book" id={book.id}>
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                                <div className="book-shelf-changer">
                                                    <select onChange={this.handleEvent} id={book.id}>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                        <option value="remove">Remove</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors}</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.props.wantBooks.map((book) => (
                                <li>
                                    <div className="book" id={book.id}>
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={this.handleEvent} id={book.id}>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                    <option value="remove">Remove</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                ))}
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.props.readBooks.map((book) => (
                                <li>
                                    <div className="book" id={book.id}>
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                            <div className="book-shelf-changer">
                                                <select onChange={this.handleEvent} id={book.id}>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                    <option value="remove">Remove</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                ))}
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search" books={this.props.books} onUpdateBookshelf={this.props.updateShelf} className="open-search-link">Search for a book</Link>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Bookshelf;