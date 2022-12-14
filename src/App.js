import "./AppStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar"
import Home from "./components/Home/Home";
import ItemList from './components/Items/ItemList/ItemList'
import ItemCategory from "./components/Items/ItemCategory/ItemCategory";
import Create from "./components/Items/ItemCRUD/ItemCreate/Create";
import Update from "./components/Items/ItemCRUD/ItemUpdate/Update";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ItemDetail from "./components/Items/ItemDetail/ItemDetail";
import Shopcart from "./components/ShopCart/Shopcart";
import Profile from "./components/Auth/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Read from "./components/Items/ItemCRUD/ItemRead/Read";

export default function App() {

    return (
        <div className="App">

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>

                    <Route path='/products' element={<ItemList></ItemList>}></Route>
                    <Route path='/products/:id' element={<ItemDetail></ItemDetail>}></Route>
                    <Route path='/category/:category' element={<ItemCategory></ItemCategory>}></Route>

                    <Route path='/shopcart' element={<Shopcart></Shopcart>}></Route>

                    <Route path='/add' element={<Create></Create>}></Route>
                    <Route path='/read' element={<Read></Read>}></Route>
                    <Route path='/update/:id' element={<Update></Update>}></Route>

                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                    <Route path='/profile' element={<Profile></Profile>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}