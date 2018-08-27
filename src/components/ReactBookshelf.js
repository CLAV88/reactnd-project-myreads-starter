import React, { Component } from "react";
import PropTypes from 'prop-types';
class ReactBookshelf extends Component {

    render() {
        const { books } = this.props
        let searchResults;
        searchResults = books.map((book) => (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail +')' }}></div>
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
        ))
        return (                
            <div className="bookshelf">
                <h2 className="bookshelf-title">Returned Results</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {searchResults}
                    </ol>
                </div>
            </div>
        )
    }
}
// Specifies the default values for props:
ReactBookshelf.defaultProps = {
    books: [{
        title: 'Search for a new book',
        authors: 'Written by anyone',
        imageLinks: {
            thumbnail: '/src/img/blank-book-cover-template.jpg'
        }
    }]
};
export default ReactBookshelf;
