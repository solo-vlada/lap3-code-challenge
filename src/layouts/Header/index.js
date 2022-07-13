import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigation = useNavigate()

    function handleBack(e){
        e.preventDefault();
        navigation(-1);
    }
    return (
        <>
            <header>
                <nav>
                    <Link to='/'>Homepage</Link>
                    <Link to='/search'>Search</Link>
                    <button onClick={handleBack}>Back</button>
                </nav>
                <Outlet />
            </header>
        </>
    )
}

export default Header;
