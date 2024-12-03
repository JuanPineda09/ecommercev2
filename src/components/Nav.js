import React from 'react';
import logo from "../Utils/Logo.svg";
import purchaseCar from "../Utils/cart-solid-240 1.svg";
import user from "../Utils/bxs-user-circle.svg"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Nav =()=>{

    const [menu, setMenu] = useState("hidden")
    const [menuEncendido, setMenuEncendido] = useState(false);

    const desplegarMenu = () =>{
        if(!menuEncendido){
            setMenu(" absolute list-none rigth-0 w-50% rounded-3xl bg-[#f2f2f2]/70   animate-menu  shadow-2xl");
        }else{
            setMenu("hidden");
        }
        setMenuEncendido(!menuEncendido)
    }

  /*   useEffect(() => {
        window.addEventListener("scroll", desplegarMenu);

        // Limpieza del efecto
        return () => {
            window.removeEventListener("scroll", desplegarMenu);
        };
    }, [menuEncendido]); */

    return(
    <>
        <header class="w-full flex fixed justify-center items-center flex-col bg-opacity-100 ">
        <div class="h-[10%] flex bg-white justify-center items-center rounded-b-full w-[10%] shadow-xl relative  hover:scale-105 hover:duration-300 hover:ease-out">
            
            <div class="flex justify-center items-center w-[68%] h-[95%]">
            <img loading="lazy" src={logo} onClick={desplegarMenu} alt="Logo"/>
            </div>
        </div>
        <nav className="w-full h-full flex justify-end">
                <ul loading="lazy" class={menu}>
                    <li class="w-full  flex flex-row justify-center items-center rounded-t-3xl hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400">
                        <Link to={"/Login"}>
                        <img loading="lazy" class="hover:scale-105" src={user}  alt="PurchaseCar"/>
                        </Link>
                        <a href="productos.html">
                            <img loading="lazy" class="hover:scale-105" src={purchaseCar}  alt="PurchaseCar"/>
                        </a>
                    </li>
                    <li class="w-full text-center hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400"><a href="">Inicio</a></li>
                    <li class="w-full text-center hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400"><a href="">Sobre Nosotros</a></li>
                    <li class="w-full text-center hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400"><a href="">Nuestros Productos</a></li>
                    <li class="w-full text-center rounded-b-3xl hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400"><a href="">Contacto</a></li>
                    
                </ul>
            </nav>
    </header>
    </>
);
}

export default Nav;