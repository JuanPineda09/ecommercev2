import React, {useState } from 'react';
import imageUser from '../Utils/bxs-user-circle.svg';
import imageSearch from '../Utils/bx-search.svg';
import { Link } from 'react-router-dom';

 
const DashboardAdmin = () => {
  const [menu, setMenu] = useState("hidden")
  const [menuEncendido, setMenuEncendido] = useState(false);

  const desplegarMenu = () =>{
      if(!menuEncendido){
          setMenu("absolute top-14 right-[2px] rounded-bl-lg bg-[#ffffff]   animate-menu  shadow-md");
      }else{
          setMenu("hidden");
      }
      setMenuEncendido(!menuEncendido)
  }
return(
    <>
    <div className='w-full h-[100vh] flex bg-stone-100'>

      <div className='w-[20%] h-full flex flex-col items-center bg-azullemuzas '>
        <div className='w-3/4 flex m-5 p-2 justify-around items-center bg-white rounded-md'>
          <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1731373159/Proyecto%20Lemuzas/Logo_jdtlyj.svg'></img>
        </div>

       <table className='w-4/5 grid grid-cols-2 gap-y-8 justify-items-start justify-self-center'>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-home_1_tbwnp7.png'></img>
        <Link className='text-left text-white font-medium self-center'>Home</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-user-circle_1_ik1gzm.png'></img>
        <Link className='text-left text-white font-medium self-center'>Usuarios</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-wallet-alt_1_vzg9gi.png'></img>
        <Link to={"/Categorias"} className='text-left text-white font-medium self-center'>Categorias</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bx-cart_1_t7nfs0.png'></img>
        <Link className='text-left text-white font-medium self-center'>Productos</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-offer_1_qeir8r.png'></img>
        <Link className='text-left text-white font-medium self-center'>Ofertas</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bxs-purchase-tag-alt_1_noedme.png'className=''></img>
        <Link className='text-left text-white font-medium self-center'>Pedidos</Link>
        <img src='https://res.cloudinary.com/dhykdpajo/image/upload/v1732932169/Proyecto%20Lemuzas/bx-history_1_qpqmpm.png'></img>
        <Link className='text-left text-white font-medium self-center'>Ventas</Link>
       </table> 
      </div>
      
      {/* NAVBAR */}
      <div className='w-[100%] h-14 bg-white shadow-md flex'>
        <div className='w-[85%] h-full flex items-center justify-center'>
          <form className='w-[30%] flex bg-stone-100 rounded-full hover:border-2 hover:ease-out hover:duration-100'>
            <img src={imageSearch} className='pl-4 pr-1 py-1'></img>
            <input type='text' className='bg-stone-100 self-center h-6 outline-none'></input>
          </form>
        </div>
        <div className='w-[15%] h-full flex justify-center'>
          <img src={imageUser} className='h-full' onClick={desplegarMenu} ></img>
          <div className={menu}>
          <h2 className='text-[12px] text-center'>Juan David Pineda Sánchez</h2>
          </div>
            
        </div>  
      </div>
    </div>
    </>
)
}

export default DashboardAdmin;