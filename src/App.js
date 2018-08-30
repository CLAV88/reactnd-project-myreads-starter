
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
          this.setState(state => ({
            books: state.books.concat([ book ])
          }))
          console.log(this.state.books)
      }
     render() {
        return (
          <div>
            <Route exact path='/' render={() => (<Bookshelf
            books={this.state.books}
            readingBooks={this.state.readingBooks}
            readBooks={this.state.readBooks}
            wantBooks={this.state.wantBooks}
            onDeleteBook={this.removeBook}
            />)}/>
            <Route path='/search' render={({ history }) => (<Search
            books={this.state.books}
            readingBooks={this.state.readingBooks}
            readBooks={this.state.readBooks}
            wantBooks={this.state.wantBooks}
            onUpdateBook={(book) => {
                console.log(book)
                this.createBook(book)
                history.push('/')
            }}
            />
            )}/>
          </div>
        )
      }
    }
export default BooksApp