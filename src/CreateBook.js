import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateBook extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateBook)
      this.props.onCreateBook(values)
  }

  render() {
    return (
      <div>
        <Link className='close-create-book' to='/'>Close</Link>
        <form onSubmit={this.handleSubmit} className='create-book-form'>
          <ImageInput
            className='create-book-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-book-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='email' placeholder='Email'/>
            <button>Add book</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateBook