
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf'
import Search from './components/Search';



class BooksApp extends Component {
    render() {
        return (
          <div>
            <Route exact path='/' render={() => (<Bookshelf/>)}/>
            <Route path='/search' render={() => (<Search/>)}/>
          </div>
        )
      }
    }
export default BooksApp