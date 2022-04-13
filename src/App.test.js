import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP Component', ()=>{

  it('Should render App Component',()=>{
    const Container = shallow(<App />);
    expect(Container.find('div').length).toEqual(1);
  });

  it('Should render Navbar Component',()=>{
    const Container = shallow(<App />);
    expect(Container.find('Navbar').length).toEqual(1);
  });

})