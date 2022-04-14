import React from 'react';
import { shallow } from 'enzyme';
import BookRoutes from './BookRoutes';
import { Route } from "react-router-dom";
import Home from './Routes/Home';
import BookDetail from './Routes/BookDetail';
import BookUpdate from './Routes/BookUpdate';
import BookCreate from './Routes/BookCreate';

describe('Book Routes Component', () => {

  let container;
  let pathMap = {};


  beforeAll(() => {
    const component = shallow(<BookRoutes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.element.type;
      return pathMap;
    }, {});
  })

  it('Should render Home Component for / route', () => {
    expect(pathMap['/']).toBe(Home);
  });

  it('Should render BookDetail Component for /books/:id', () => {
    expect(pathMap['/books/:id']).toBe(BookDetail);
  });

  it('Should render BookUpdate Component for /books/:id/update', () => {
    expect(pathMap['/books/:id/update']).toBe(BookUpdate);
  });

  it('Should render BookCreate Component for /books/:id/create', () => {
    expect(pathMap['/books/create']).toBe(BookCreate);
  });

})