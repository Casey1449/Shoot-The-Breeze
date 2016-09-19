import React from 'react';
// let _ = require('lodash');

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a messagelist', ()=>{
    const wrapper = shallow(<Application />);
    expect(wrapper.find('MessageList')).to.exist;
  });

  it('should allow us to set a user', ()=>{
    const wrapper = mount(<Application />);
    expect(wrapper.state.user).to.equal(null);
    wrapper.state().user = 'Bobby';
    expect(wrapper.state.user).to.equal('Bobby');
  });

});

// it('should have the button text rendered onto the page', function(){
//   const wrapper = render(<App/>)
//   expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
// })
// })
//
// describe('likes counter',function(){
// it('should have 2 action button props', function(){
//   const wrapper = render(<LikesCounter/>)
//   expect(wrapper.find('.ActionButton')).to.have.length(2)
// })
//
// it('should allow me to click the action button', function(){
//   const wrapper = mount(<LikesCounter/>)
//   wrapper.state().count = 0 // we must do this because this value isn't set initially
//   var button = wrapper.find('#like').simulate('click')
//
//   expect(wrapper.state().count).to.equal(1)
// })
