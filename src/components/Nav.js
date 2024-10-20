import React from 'react';
import logo from "../Utils/Logo.svg";
import purchaseCar from "../Utils/cart-solid-240 1.svg";
import user from "../Utils/bxs-user-circle.svg"
import { useState } from "react";


const Nav =()=>{

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
        <header class="w-full h-[10%] flex fixed top-0 p-0 justify-center bg-opacity-100 ">
        <div class="flex bg-white justify-center items-center rounded-b-full w-[10%] shadow-xl relative">
            
            <div class="flex justify-center w-[68%] h-[95%]">
                <img loading="lazy" src={logo} class="" onClick={desplegarMenu} alt="Logo"/>
            </div>
            <nav className="">
                <ul loading="lazy" class={menu}>
                    <li class="w-full flex flex-row justify-center items-center rounded-t-3xl hover:bg-[#f2f2f2] hover:border-b-[1px] hover:border-gray-400">
                        <a href="productos.html">
                            <img loading="lazy" class="hover:scale-105" src={user}  alt="PurchaseCar"/>
                        </a>
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
        </div>
    </header>
    </>
);
}

export default Nav;