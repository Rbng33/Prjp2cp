import React from 'react'
import Navbar from '../../Navbar';
import Footer from '../../HomePage/Footer';
import AjoutEnfant from './FormEnfant';

const PAGENVENFANT = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className=' mx-[20%] '> 
        <AjoutEnfant/>
    </div>
   

    </>
  )
}

export default PAGENVENFANT;