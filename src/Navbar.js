import React from 'react';
import {Link, useLocation} from 'react-router-dom'; 

const Navbar = () => {
    const location =useLocation();
    console.log(location);

    return (
        <div className = 'font-black text-4xl uppercase bg-transparent text-blue mx-auto text-center flex place-content-end'>

            <div className="flex justify-between">
                <Link to = '/'>
                    <p className= {location.pathname == '/'?'underline px-4':' px-4'}> Home</p>
                </Link>
                <Link to = '/watched'>
                    <p className= {location.pathname == '/watched'?'underline px-4':' px-4'}> Watched</p>                    
                </Link>
                <Link to = '/watchlist'>
                    <p className= {location.pathname == '/watchlist'?'underline px-4':' px-4'}> Watchlist</p>
                </Link>

            </div>
        </div>
    )
}

export default Navbar
