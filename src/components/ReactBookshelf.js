import React, { Component } from "react";
class ReactBookshelf extends Component {
    render() {
        const { books } = this.props;
        let searchResults;
        if ((books.map)) {
            searchResults =  books.map((book) => (
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
        } else {
            searchResults = <p>Nothing Found</p>
        };        
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
