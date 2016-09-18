import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
       <h1>Shoot the Breeze</h1>
       <input placeholder='Filter'
        className='search-box'
       />
     <button className='sort-button'>Sort
      <img className="arrows"
        src="../public/img/up-arrow.svg"/>
     </button>
     <button className='sort-button'>Sort
        <img className="arrows"
          src="../public/img/down-arrow.svg"/>
     </button>
      </div>
    )
  }
}

export default Header;
