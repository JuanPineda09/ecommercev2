import React, { useEffect, useState, navigate } from 'react';
import imageUser from '../Utils/bxs-user-circle.svg';
import imageSearch from '../Utils/bx-search.svg';
import { NavLink, Outlet } from 'react-router-dom';
 
const DashboardAdmin = () => {
  const [menu, setMenu] = useState("hidden")
  const [menuEncendido, setMenuEncendido] = useState(false);

  const desplegarMenu = () =>{
      if(!menuEncendido){
          setMenu("origin-top-right-bottom absolute list-none top-16 left-0 w-50% rounded-3xl bg-[#f2f2f2]/70   animate-menu  shadow-2xl");
      }else{
          setMenu("hidden");
      }
      setMenuEncendido(!menuEncendido)
  }
return(
    <>
    <div className='absolute right-0  w-full h-[100vh] flex bg-stone-100'>

      <div className=' w-[20%] h-full flex flex-col items-center bg-azullemuzas '>
        <div className='w-3/4 flex m-5 p-2 justify-around items-center bg-white rounded-md'>
          <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1731373159/Proyecto%20Lemuzas/Logo_jdtlyj.svg'></img>
        </div>
        {/*Menu Sidebar*/}
        <table className='w-4/5'>
          <tr className='flex items-center justify-start my-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-home_1_tbwnp7.png' className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminHome'>Home</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-user-circle_1_ik1gzm.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminUsuarios'>Usuarios</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-wallet-alt_1_vzg9gi.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminCategorias'>Categorias</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bx-cart_1_t7nfs0.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminProductos'>Productos</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-offer_1_qeir8r.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminOfertas'>Ofertas</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-purchase-tag-alt_1_noedme.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminPedidos'>Pedidos</NavLink></th>
          </tr>
          <tr className='flex items-center justify-start mb-5'>
            <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bx-history_1_qpqmpm.png'className='mr-3'></img>
            <th className='text-left text-white font-medium'><NavLink to='/Dashboard-Administracion/AdminVentas'>Ventas</NavLink></th>
          </tr>
        </table>

      </div>
      
      {/* NAVBAR */}
      <div className='absolute z-10 right-0  w-4/5 h-14 bg-white shadow-md flex'>
        <div className='w-[80%] h-full flex items-center justify-center'>
          <form className='w-[30%] flex bg-stone-100 rounded-full hover:border-2 hover:ease-out hover:duration-100'>
            <img src={imageSearch} className='pl-4 pr-1 py-1'></img>
            <input type='text' className='bg-stone-100 self-center h-6 outline-none'></input>
          </form>
        </div>
        <div className='w-[20%] h-full flex flex-col'>
          <img src={imageUser} className='h-[60%]' onClick={desplegarMenu} ></img>
          <h1 className='text-[12px] text-center'>Juan David Pineda Sánchez</h1>
          <div className={menu}></div>
        </div>  
      </div>
    </div>

    <Outlet/>
    </>
)
}

export default DashboardAdmin;