import { useEffect, useContext } from "react";
import BookAPI from "../APIs/BookAPI";
import { BookContext } from "../Context/BookContext";

const BookTable = () => {

    const { books, setBooks } = useContext(BookContext);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await BookAPI.get("/books");
                setBooks(response.data);
            } catch (err) { }
        };
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
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>)
}
export default BookTable;