import { useNavigate } from "react-router-dom";
import BookTable from "../Components/BookTable";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <br /><br />
            <button type="button" class="btn btn-primary" onClick={() => navigate('/books/create')}>Add Book</button>
            <br /><br />

            <div className="container">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <br />
                <BookTable />
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button className="page-link">Previous</button>
                        </li>
                        <li className="page-item"><button className="page-link">1</button></li>
                        <li className="page-item"><button className="page-link" >2</button></li>
                        <li className="page-item"><button className="page-link" >3</button></li>
                        <li className="page-item">
                            <button className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Home;