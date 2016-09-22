import React, { Component } from 'react';
import Button from './Button.js';

class Header extends Component {
  render() {
    return (
      <div className='header'>
       <h1>Shoot the Breeze</h1>
       <input placeholder='Filter'
        className='search-box'
        value={this.props.filterText}
        onChange={this.props.typeFilter}
       />
     <Button
       disabled={this.props.sorted}
       handleClick={this.props.sortMessages}
       name='sort-button'
       text ='Sort ⬆︎' />

     <button
       disabled={!this.props.sorted}
       onClick={this.props.sortMessages}
       className='sort-button'>Sort ⬇︎
     </button>
      </div>
    )
  }
}

export default Header;
