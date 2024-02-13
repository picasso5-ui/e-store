import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='mb-4  bg-light opacity-1 shadow px-3 py-2 header text-dark sticky-top' >
    <div className='container d-flex justify-content-between align-items-center'>
       <div>
       
       
      <Link to="/"> <p className='logo fw-bold fs-3 text-dark'>p-stores</p></Link>
       </div>
      <div className='d-flex gap-2'>
     <Link to ="/cart">
      <FaShoppingCart size={36} className=' cart '/>
      </Link>
      
      <Link to="/register"><CgProfile size={36} className='pointer text-dark '/></Link>
      
      </div>
    </div>
     
    </div>
  )
}

export default Header
