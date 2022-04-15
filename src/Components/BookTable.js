import { useEffect, useContext } from "react";
import BookAPI from "../APIs/BookAPI";
import { BookContext } from "../Context/BookContext";
import { useNavigate } from "react-router-dom";

const BookTable = () => {

    const { books, setBooks , selectedBook , setSelectedBook } = useContext(BookContext);
    const navigate = useNavigate();

    const fetchBook = async (bookId) => {
        try {
            const response = await BookAPI.get(`/book/${bookId}`);
            console.log(response.data);
            setSelectedBook(response.data);
        } catch (err) { }
    };

    const handleUpdate = async (e,id) => {
        e.stopPropagation();
        await fetchBook(id);
        navigate(`books/${id}/update`)
    }

    const fetchBooks = async () => {
        try {
            const response = await BookAPI.get("/books");
            setBooks(response.data);
        } catch (err) { }
    };

    const handleDelete = async (e,id) => {
        e.stopPropagation();
        try {
            await BookAPI.delete(`book/${id}`);
            fetchBooks();
          }catch(err){}
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books &&
                    books.map((book) => {
                        return (
                            <tr key={book.id}>
                                <th scope="row">{book.id}</th>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>{book.rating}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" id="update" onClick={(e) => { handleUpdate(e,book.id) }}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" id="delete" onClick={(e) => { handleDelete(e,book.id) }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>)
}
export default BookTable;