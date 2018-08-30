import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
        query: '',
        showingBooks: [],
        spanElement: '0',
        newBooks:[]
    }
    static propTypes = {
        books: PropTypes.array.isRequired,
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        });
    }
    updateQuery = (query) => {
        this.setState({ 
            query: query
        });
        this.updateShowingBooks(query)
    };

    updateShowingBooks = function (query) {
        BooksAPI.search(query).then((showingBooks) => {
            this.setState({ showingBooks });
            this.updateCount(showingBooks);
        });
    };
    updateBooks(book) {
            this.setState({newBooks: this.state.newBooks.concat([ book ])});
    }
    updateCount = function (showingBooks) {
        if (showingBooks) {
            this.setState({spanElement: showingBooks.length});
        } else {
            this.setState({spanElement: 0});
        }
    };

    clearQuery = () => {
        this.setState({query: ''});
        this.setState({showingBooks: '0'});
        this.setState({spanElement: '0'});
    };
    
    handleEvent = (e) => {
        e.preventDefault()
        let id, selOption
        id = e.target.id
        selOption = e.target.options[e.target.options.selectedIndex].text;
        BooksAPI.get(id).then(book => {
            switch(selOption) {
            case 'Want to Read': 
                book.shelf = 'wantToRead';
                break;
            case 'Read':
                book.shelf = 'read';
                break;
            case 'Currently Reading':
                book.shelf = 'currentlyReading';
                break;
            default:
                book.shelf = 'none';
            }
            this.props.onUpdateBook(book);
        })
    }
        render() {
        const query = this.state.query;
        const showingBooks = this.state.showingBooks;
        const newBooks = this.state.newBooks;
            return (
                <div>
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link to="/" component={newBooks} className="close-search">Close</Link>
                                <input 
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                                />
                        </div>
                    </div>
   
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {(showingBooks && showingBooks.length > 1) ? showingBooks.map((book) => (
                                    <li>
                                        <div className="book" id={book.id}>
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                                                <div className="book-shelf-changer">
                                                    <select onChange={this.handleEvent} id={book.id}>
                                                        <option value="none" disabled='true' selected>None</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors}</div>
                                        </div>
                                    </li>
                                )): <div>Lets find something to read...</div>}
                            </ol>
                        </div>
                        </div>
                </div>
            )
        }
    }
export default Search;