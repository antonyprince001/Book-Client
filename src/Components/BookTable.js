import { useEffect, useContext } from "react";
import BookAPI from "../APIs/BookAPI";
import { BookContext } from "../Context/BookContext";

const BookTable = () => {

    const { books, setBooks } = useContext(BookContext);

    const handleUpdate = (e,id) => {
        e.stopPropagation();
        console.log(id);
    }

    const handleDelete = async (e,id) => {
        e.stopPropagation();
        try {
            const response = await BookAPI.delete(`book/${id}`);
            console.log(response);
            // setBooks(books.filter((book)=>{
            //   return book.id !== id
            // }));
            fetchBooks();
          }catch(err){}
    }

    const fetchBooks = async () => {
        try {
            const response = await BookAPI.get("/books");
            setBooks(response.data);
        } catch (err) { }
    };

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
                                    <button type="button" class="btn btn-success" id="update" onClick={(e) => { handleUpdate(e,book.id) }}>
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