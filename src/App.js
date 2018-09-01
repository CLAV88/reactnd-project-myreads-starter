
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf';
import Search from './components/Search';
import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends Component {
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
        BooksAPI.remove(book).then(
            BooksAPI.update(book,book.shelf).then(
                this.setState((state) => ({
                    books: state.books.filter((c) => c.id !== book.id)
                }))
            )
        );
    };
    moveBook = (book) => {
        this.removeBook(book)
            BooksAPI.getAll()
            .then((books) => {
                this.setState({ books });
                this.shelveBook();
            });
        };
    updateBook(book) {
        BooksAPI.update(book,book.shelf).then(
            BooksAPI.getAll()
            .then((books) => {
                this.setState({ books });
                this.shelveBook();
            })
        );
      }
     render() {
        return (
          <div>
            <Route exact path='/' render={({ history }) => (<Bookshelf
            books={this.state.books}
            readingBooks={this.state.readingBooks}
            readBooks={this.state.readBooks}
            wantBooks={this.state.wantBooks}
            onUpdateBook={(book) => {
                this.moveBook(book)
                history.push('/')
            }}
            onDeleteBook={(book) => {
                this.removeBook(book)
                history.push('/')
            }}
            />)}/>
            <Route path='/search' render={({ history }) => (<Search
            books={this.state.books}
            readingBooks={this.state.readingBooks}
            readBooks={this.state.readBooks}
            wantBooks={this.state.wantBooks}
            onUpdateBook={(book) => {
                this.updateBook(book)
                history.push('/')
            }}
            />
            )}/>
          </div>
        )
      }
    }
export default BooksApp