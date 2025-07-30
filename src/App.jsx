import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./signup";
import Login from "./login";
import Home from "./home";

function App()
{
    return(
        <div>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
         </Routes>
         </BrowserRouter>

        </div>
    )
}
export default App