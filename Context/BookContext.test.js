import { BookContext, BookContextProvider } from './BookContext';

describe('Test Book Context', ()=>{

  it('Context should be defined',()=>{
    let context = useContext(BookContext)
    expect(context).toBeDefined();
  });

  it('Context Provider be defined',()=>{
    expect(<BookContextProvider />).toBeDefined();
  });

})