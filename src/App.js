
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'
import ListBooks from './ListBooks';

class BooksApp extends Component {
    render() {
        return (
          <div>
            <Route exact path='/' render={() => (<Bookshelf/>)}/>
            <Route path='/ListBooks' render={() => (<ListBooks/>)}/>
          </div>
        )
      }
    }
export default BooksApp