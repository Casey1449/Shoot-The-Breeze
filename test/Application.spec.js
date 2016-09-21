import React from 'react';
// let _ = require('lodash');

import { shallow, mount, render, simulate } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import MessageList from '../lib/components/Message-list';
import mockMessages from './helpers/messages';
import fakeUser from './helpers/fake-user';
import InputForm from '../lib/components/Input-form';


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
    expect(wrapper.state.user).to.equal(undefined);
    wrapper.state().user = 'Bobby';
    expect(wrapper.state().user).to.equal('Bobby');
  });

  it('should have 2 input fields', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    expect(wrapper.render().find('input')).to.have.length(2);
  });

  it('should have 3 buttons when there is no user', ()=>{
    const wrapper = shallow(<Application />);
    expect(wrapper.render().find('button')).to.have.length(3);
  });

  it('should have 4 buttons when there is a user', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    wrapper.state().user = fakeUser;
    wrapper.update();
    expect(wrapper.render().find('button')).to.have.length(4);
  });

  it('should have a user when passed a damn user', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    wrapper.state().user = fakeUser;
    expect(wrapper.state().user).to.equal(fakeUser);
  });

  it('should have an Input Form', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    expect(wrapper.find('footer').render().find(InputForm)).to.exist;
  });

  it('should have a submit-button', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    expect(wrapper.find('footer').render().find(InputForm).children().find('.submit-button')).to.exist;
  });

  it('should have an input form in the footer', ()=>{
    const wrapper = shallow(<Application user={fakeUser}/>);
    expect(wrapper.find('footer').render().find('input')).to.exist;
  });

  it('change the value of the draft-messages state on change of input field', ()=>{
    const wrapper = mount(<Application />);
    const Input = wrapper.find('footer').render().find('input');
    Input.simulate('change', {target: {value: 'My new value'}});
    expect(wrapper.state().draftMessage).to.equal('My new value');
  });


});
