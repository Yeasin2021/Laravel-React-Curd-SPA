import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";

import Home from  './pages/Home';
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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
