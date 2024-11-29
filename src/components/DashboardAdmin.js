import React, { useEffect, useState, navigate } from 'react';
import imageUser from '../Utils/bxs-user-circle.svg';
import imageSearch from '../Utils/bx-search.svg';

 
const DashboardAdmin = () => {
    
return(
    <>
    <div className='w-full h-[100vh] flex bg-stone-100'>
      <div className='w-[20%] h-full bg-azullemuzas'><p className='text-white'>Sidebar</p></div>
      <div className='w-[80%] h-14 bg-white shadow-md flex'>
        <div className='w-[80%] h-full flex items-center justify-center'>
          <form className='w-[30%] flex bg-stone-100 rounded-full'>
            <img src={imageSearch} className='pl-4 py-1'></img>
            <input type='text' className='bg-stone-100 h-6'></input>
          </form>
        </div>
        <div>
          <img src={imageUser} className='w-[30%]' ></img>
          <h1>Juan David Pineda Sánchez</h1>
        </div>  
      </div>
    </div>
    </>
)
}

export default DashboardAdmin;