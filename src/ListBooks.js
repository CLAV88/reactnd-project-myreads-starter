import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onDeleteBook: PropTypes.func.isRequired
      }
    
      state = {
        query: ''
      }
    
      updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }
    
      clearQuery = () => {
        this.setState({ query: '' })
      }
    
      render() {
        const { books, onDeleteBook } = this.props
        const { query } = this.state
    
        let showingBooks
        if (query) {
          const match = new RegExp(escapeRegExp(query), 'i')
          showingBooks = books.filter((book) => match.test(book.name))
        } else {
          showingBooks = books;
        }
    
        showingBooks.sort(sortBy('title'))

            return (
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */
                    }
                    <div className='list-books-top'>
                        <input 
                        className='search-books'
                        type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value) }
                        />
                        <Link
                            to='/create'
                            className='add-book'
                        >Add Contact</Link>
                    </div>
            {showingBooks.length !== books.length && (
                <div className="search-books-results">    
                    <span>Now showing {showingBooks.length} of {books.length} total</span>
                    <button onClick={this.clearQuery}>Show all</button>
                </div>
            )} 

            <ol className="books-grid">
                {showingBooks.map((book) => (
                    <li key={book.id} className='book-list-item'>
                        <div className='book-details'>
                            <p>{book.name}</p>
                            <p>{book.email}</p>
                        </div>
                        <button onClick={() => onDeleteBook(book)} className='book-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
  }
}

export default ListBooks;