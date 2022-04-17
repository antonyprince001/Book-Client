import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookTable from "../Components/BookTable";
import { BookContext } from "../Context/BookContext";

const Home = () => {
    const navigate = useNavigate();

    const { books, setBooks } = useContext(BookContext);

    return (
        <div>
            <br /><br />
            <button type="button" class="btn btn-primary" onClick={() => navigate('/books/create')}>Add Book</button>
            <br /><br />

            <div className="container">
                <br />
                <BookTable />
            </div>
        </div>
    );
}
export default Home;