import React, { Component } from "react";
class ReactBookshelf extends Component {
    render() {
        const { books } = this.props
        let searchResults
        if (books) {
            searchResults = this.props.books.map((book) => (
                <li>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
        } else {
            searchResults = 
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(/src/img/blank-book-cover-template.jpg)' }}></div>
                    </div>
                    <div className="book-title">Dummy Book Title</div>
                    <div className="book-authors">Dummy Authors</div>
                </div>
            </li>
        }
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

export default ReactBookshelf;
