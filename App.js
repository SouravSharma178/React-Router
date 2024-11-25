import './App.css';
import {BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact'
import Filter from './Components/Filter'
import Company from './Components/Company'
import Other from './Components/Other'
import DetailsPage from './Components/DetailsPage';
import Protected from './Components/Protected';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Protected Component={Home}/>}></Route>

     {/*this is for showing a particular page*/}
     {<Route path="/about" element={<About/>}></Route>}
     {<Route path="/login" element={<Login/>}></Route>}
     {<Route path="/filter" element={<Filter/>}></Route>}
     {<Route path="/about/:id" element={<DetailsPage/>}></Route>}

         {/*this is the code for nested routes*/}

     {<Route path="/contact/" element={<Contact/>}>
       <Route path="company" element={<Company/>}></Route>
       <Route path="other" element={<Other/>}></Route>
     </Route>}

      {/*this is for redirection*/}
     <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
