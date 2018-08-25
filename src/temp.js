//import React, { Component } from 'react'
import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
//import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class BooksApp extends React.Component {
    state = {
        books: []
      }
      componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
      }
      removebook = (book) => {
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