import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import ReactBookshelf from './ReactBookshelf'
import { debounce } from 'throttle-debounce';

class Search extends Component {
    state = {
        query: '',
        books: [],
        showingBooks: [],
        spanElement: '0',
        updateQuery: debounce(750, this.updateQuery)
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
        this.updateBooks(query)
    };

    updateBooks = function (query) {
        BooksAPI.search(query).then((showingBooks) => {
            this.setState({ showingBooks });
            this.updateCount(showingBooks);
        });
    };

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
    
    render() {

    const query = this.state.query;
    const showingBooks = this.state.showingBooks;
    const spanElement = this.state.spanElement;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                        <div className='showing-books'>
                            <ReactBookshelf books={showingBooks}/>
                            <p>{spanElement} Results Found </p>
                            <button onClick={this.clearQuery}>Show all</button>
                        </div>
                </div>
            </div>
        )
        }
    }

export default Search;