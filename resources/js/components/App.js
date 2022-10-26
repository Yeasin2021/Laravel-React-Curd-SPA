import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";


import '../../css/app.css';

import Home from  './pages/Home';
import Edit from  './pages/Edit';
import Nav from './Nav';
import Form from './Form';
import  Error404  from './Error404';
import Sidebar from './pages/Sidebar';


// import Toastr from '../components/pages/Toastr';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {

    return (
        <>
        <ToastContainer/>
            <BrowserRouter>
            <Nav />
            <Sidebar />
                <Routes>
                    <Route  path='/' element={ <Home /> } />
                    {/* <Route  path='/s' element={ <Home /> } /> */}
                    <Route  path='/form' element={ <Form /> } />
                    <Route  path='/contact/:id' element={ <Edit /> } />
                    <Route  path='*' element={ <Error404 /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
