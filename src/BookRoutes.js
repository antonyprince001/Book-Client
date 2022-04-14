import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import BookDetail from './Routes/BookDetail';
import BookUpdate from './Routes/BookUpdate';
import BookCreate from "./Routes/BookCreate";

const BookRoutes = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/books/:id' exact element={ <BookDetail />} />
            <Route path='/books/:id/update' exact element={ <BookUpdate />} />
            <Route path='/books/:id/create' exact element={ <BookCreate />} />
        </Routes>
        </BrowserRouter>
    )
}
export default BookRoutes;