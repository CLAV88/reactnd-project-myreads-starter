import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import BookLibrary from './BookLibrary';

class Bookshelf extends Component {
        state = {
            books: [],
            readBooks: [],
            readingBooks: [],
            wantBooks: [],
        }
        componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
            this.shelveBook();
            })
        }

        updateBookshelf(newBooks) {
                    this.setState({books: this.state.books.concat([ newBooks ])});
        }
        shelveBook() {
                this.setState((state) => ({
                    readBooks: state.books.filter((c) => c.shelf === 'read')
                }));
                this.setState((state) => ({
                    wantBooks: state.books.filter((c) => c.shelf === 'wantToRead')
                }));
                this.setState((state) => ({
                    readingBooks: state.books.filter((c) => c.shelf === 'currentlyReading')
                }));
            }
        removeBook = (book) => {
            this.setState((state) => ({
                books: state.books.filter((c) => c.id !== book.id)
            }));
                BooksAPI.remove(book);
        };
        createBook(book) {
            BooksAPI.create(book).then(book => {
                this.setState(state => ({
                    books: state.books.concat([ book ])
                }));
            });
        }
        render() {
            return (
            <div className="app">
                {this.state.showSearchPage ? (
                <div className="search-books">
                    <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid"></ol>
                    </div>
                </div>
                ) : (
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
                                <BookLibrary books={this.state.readingBooks}/>
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <BookLibrary books={this.state.wantBooks}/>
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <BookLibrary books={this.state.readBooks}/>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search" books={this.state.books} onUpdateBookshelf={this.updateBookshelf.bind(this)} className="open-search-link">Search for a book</Link>
                    </div>
                </div>
                )}
            </div>
        )
    }
} 
export default Bookshelf;