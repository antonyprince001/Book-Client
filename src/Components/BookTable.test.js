import React from 'react';
import { shallow } from 'enzyme';
import BookTable from './BookTable';

describe('Test BookTable Component', ()=>{

  let container;

  beforeEach(() => (container = shallow(<BookTable />)))

  it('Should render a table',()=>{
    expect(container.find('table').length).toEqual(1);
  });

  it('Should render correct column heading',()=>{
    expect(container.contains('Name'));
    expect(container.contains('Author'));
    expect(container.contains('Price'));
    expect(container.contains('Rating'));
  });

})