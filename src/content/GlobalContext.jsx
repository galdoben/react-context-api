
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { use } from 'react';
import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:3001/posts')
            .then(res => setPosts(res.data))
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <GlobalContext.Provider value={{ posts, fetchPosts }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}


export default GlobalContext
export { GlobalProvider, useGlobalContext }