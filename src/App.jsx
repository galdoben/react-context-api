
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider, useGlobalContext } from "./content/GlobalContext"
import PostCard from "./components/PostCard"
import PostsList from "./components/PostsList"
import { BrowserRouter as Router } from 'react-router-dom';


function App() {


  return (
    <>
      <Router>
        <GlobalProvider>
          <PostsList />
          <PostCard />
        </GlobalProvider>
      </Router>

    </>
  )
}

export default App
