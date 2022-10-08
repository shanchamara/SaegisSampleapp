import React from "react";
import Home from "./Components/Page/Home";
import About from "./Components/Page/About";
import Document from "./Components/Page/Document";
import Studentdata from "./Components/Student/Studentdata";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavBar from "./Components/Navbar/HeaderNavBar";
import {BrowserRouter ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

          <HeaderNavBar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="About" element={<About/>} />
                  <Route path="Document" element={ <Document/>} />
                  <Route path="Studentdata" element={<Studentdata/>}/>


              </Routes>

          
          
         
          
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
