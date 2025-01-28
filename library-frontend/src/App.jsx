import {
  BrowserRouter as Router,
  Routes, Route, Link,useParams,
  useNavigate
} from 'react-router-dom'
import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";

const Menu = () =>{
 return(
<div>
  <Link to='/authors'><button>authors</button></Link>
  <Link to='/books'><button>books</button></Link>
  <Link to='/newBook'><button>newBook</button></Link>
</div>
 )
  

}

const App = () => {
  //const [page, setPage] = useState("authors");

  return (
    
    <Router>
      <Menu/>
      {/* <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div> */}



      <Routes>
        <Route path='/authors' element={ <Authors> </Authors>}></Route>
        <Route path='/books' element={ <Books/>}></Route>
        <Route path='/newBook' element={ <NewBook/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
