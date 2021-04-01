import React , { createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
    const [books,setBooks] = useState([
        {title:'Name of the wind',id:1},
        {title:'Alat Chokro',id:2},
        {title:'Kobi o Dondito purus',id:3},
        {title:'Dayal',id:4}
    ])
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;