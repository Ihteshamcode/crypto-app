import React from 'react';
import{FaCoins} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
         <span  className='icon'><FaCoins/></span>
         <h1 className='nav-coin'>coins</h1>
    </div>
  )
}

export default Navbar