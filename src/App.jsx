
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider, useGlobalContext } from "./content/GlobalContext"
import PostCard from "./components/PostCard"
import PostsList from "./components/PostsList"


function App() {


  return (
    <>
      <GlobalProvider>
        <PostsList />
        <PostCard />
      </GlobalProvider>

    </>
  )
}

export default App
