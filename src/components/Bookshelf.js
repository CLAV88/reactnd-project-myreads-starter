import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'

class Bookshelf extends Component {
    state = {
        books: []
      }
      componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
      }
      removeBook = (book) => {
        this.setState((state) => ({
          books: state.books.filter((c) => c.id !== book.id)
        }))
        BooksAPI.remove(book)
      }
    
      CreateBook(book) {
        BooksAPI.create(book).then(book => {
          this.setState(state => ({
            books: state.books.concat([ book ])
          }))
        })
      }
      addBookToShelf(books) {
            if ((books.map)) {
                books.map((book) => (
                    ((book.imageLinks) ?            
                        <li>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    :          
                    <li>
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + '/src/img/blank-book-cover-template.jpg' + ')' }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                )))
            }
        } 
        render() {
            return (
            <div className="app">
                {this.state.showSearchPage ? (
                <div className="search-books">
                    <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
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
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="open-search">
                    <Link to="/search" className="open-search-link">Search for a book</Link>
                    </div>
                </div>
                )}
            </div>
        )
    }
} 
export default Bookshelf;