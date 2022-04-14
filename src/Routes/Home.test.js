import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import BookTable from '../Components/BookTable';

describe('Test Home Component', ()=>{

  let container;

  beforeEach(() => (container = shallow(<Home />)))

  it('Should render BookTable',()=>{
    expect(container.containsMatchingElement(<BookTable />)).toEqual(true)
  });

  it('Should render Add Book Button',()=>{
    expect(container.find('button').text()).toMatch(/Add Book/);
  });

})