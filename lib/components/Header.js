import React, { Component } from 'react'

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
     <button
       disabled={this.props.sorted}
       onClick={this.props.sortMessages}
       className='sort-button'>Sort ⬆︎
     </button>
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
