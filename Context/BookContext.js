import React,{ useState, createContext } from "react";

export const BookContext = createContext();

export const BookContextProvider = props =>{

    const [books, setBooks] = useState([]);
    const [selectedBook,setSelectedBook] = useState(null);

    const addBook = (book) =>{
        setRestaurants([...books,book]);
    }
    return (
        <BookContext.Provider value={{
            books,
            setBooks,
            addBook,
            selectedBook,
            setSelectedBook
          }}
        >
            {props.children}
        </BookContext.Provider>
    )
}
