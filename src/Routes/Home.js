import BookTable from "../Components/BookTable";

const Home = () => {
    return (
        <div>
            <button type="button" class="btn btn-primary">Add Book</button>
            <BookTable />
        </div>
    );
}
export default Home;