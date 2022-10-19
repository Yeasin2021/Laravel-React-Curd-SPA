import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";
import '../../css/app.css';

import Home from  './pages/Home';
import Edit from  './pages/Edit';
import Nav from './Nav';
import FormData from './Form';

function App() {
    return (
        <>

            <BrowserRouter>
            <Nav />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/contact' element={ <FormData /> } />
                    <Route path='/contact/:id' element={ <Edit /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
