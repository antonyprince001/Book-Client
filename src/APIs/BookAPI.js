import axios from "axios";

export default axios.create({
    baseURL : "https://book-api-tw.herokuapp.com/api/v1"
});
