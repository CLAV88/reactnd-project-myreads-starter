
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Bookshelf from './components/Bookshelf'
import './App.css'
import ListBooks from './components/ListBooks';

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