import {Route, Routes, NavLink } from 'react-router-dom';

import HomePage from './HomePage';

import Display from './Display';
import NoMatch from './NoMatch';
import Layout from '../Layout';
import Header from './Header'


function NavigationBar() {
    return(

        <div>
          
            <nav>
                <NavLink to={"/"} className="nav-links">Home</NavLink>
                
                <NavLink to={"/Header"} className="nav-links">University-List</NavLink>
               
            </nav>

            <Routes>

                <Route path='/' element={<HomePage />} />
                <Route path='Header' element={<Layout />}/>
                <Route path='*' element={<NoMatch />}/>

            </Routes>
        </div>
    )
}


export default NavigationBar