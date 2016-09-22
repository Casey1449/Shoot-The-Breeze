import React, { Component } from 'react';
import Button from './Button.js';
import Input from './Input-field.js';

module.exports = (props) => {
    return (
      <div className='header'>
         <h1>Shoot the Breeze</h1>
         <Input
          placeholder='Filter'
          name='search-box'
          value={props.filterText}
          handleChange={props.typeFilter}
         />
         <Button
           disabled={props.sorted}
           handleClick={props.sortMessages}
           name='sort-button'
           text='Sort ⬆︎'
          />
         <Button
           disabled={!props.sorted}
           handleClick={props.sortMessages}
           name='sort-button'
           text='Sort ⬇︎'
          />
      </div>
    )
}
