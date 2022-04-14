import { useNavigate } from "react-router-dom";
import BookTable from "../Components/BookTable";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <br /><br />
            <button type="button" class="btn btn-primary" onClick={()=>navigate('/books/create')}>Add Book</button>
            <BookTable />
        </div>
    );
}
export default Home;