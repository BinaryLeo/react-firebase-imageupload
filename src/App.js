
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {productInputs, userInputs} from "./formSource";
/* yarn add react-router-dom */
import "./style/dark.scss";
import {useContext} from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
       
            <BrowserRouter>
                <Routes>
                    <Route path="/"/>
                    <Route index element={<Home/>}/>{/* Home is default */}
                    <Route path="login" element={<Login/>}/>{/* Login page */}
                    <Route path="users">
                        <Route index element={<List/>}/>
                        <Route path=":Userid" element={<Single/>}/>{/* Single user page */}
                        <Route path="new"
                               element={<New inputs={userInputs} title="Add New User"/>}/> {/* New user page */}
                    </Route>
                    <Route path="products">
                        <Route index element={<List/>}/>{/* List of products */}
                        <Route path=":Productid" element={<Single/>}/>{/* Single product page */}

                        <Route path="new"
                               element={<New inputs={productInputs} title="Add New Product"/>}/>{/* New product page */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
