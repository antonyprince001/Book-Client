import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from './Components/Navbar';

describe('APP Component', ()=>{

  let container;

  beforeEach(() => (container = shallow(<App />)))

  it('Should render App Component',()=>{
    expect(container.find('div').length).toEqual(1);
  });

  it('Should render Navbar Component',()=>{
    expect(container.containsMatchingElement(<Navbar />)).toEqual(true)
  });

})