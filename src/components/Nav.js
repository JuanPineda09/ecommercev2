import logo from "../Utils/Logo.svg";
import purchaseCar from "../Utils/cart-solid-240 1.svg";
import { useState } from "react";


const Nav =()=>{
    return(
    <>
        <header class="w-full h-[10%] flex fixed top-0 shadow-xl">
        <div class="w-full flex bg-white justify-between items-center">
            <div class="w-[50%] h-[90%] flex justify-end">
                <img src={logo} alt="Logo"/>
            </div>
            <nav>
                <ul class="flex list-none justify-end mr-5 items-center">
                    <li class="mr-[15px] hover:border-b-slate-400"><a href="">Inicio</a></li>
                    <li class="mr-[15px] hover:border-b-slate-400"><a href="">Sobre Nosotros</a></li>
                    <li class="mr-[15px] hover:border-b-slate-400"><a href="">Nuestros Productos</a></li>
                    <li class="mr-[15px] hover:border-b-slate-400"><a href="">Contacto</a></li>
                    <img src="Utils/menu-regular-240.png" class="link-menu responsive burger" alt="" srcset=""/>
                    <a href="productos.html" class="link-menu responsive">
                        <img src={purchaseCar}  alt="PurchaseCar"/>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
    </>
);
}

export default Nav;