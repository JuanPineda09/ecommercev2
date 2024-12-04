import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
import Nav from './Nav'
import Footer from './Footer';
import crud from '../conexiones/crud';

const Home =()=>{

    const [categorias, setCategorias] = useState([]);

    const cargarCategorias = async ()=>{
        const response = await crud.GET(`/api/categorias`);
        console.log(response);
        setCategorias(response || []);
      }
      useEffect(() =>{
        cargarCategorias();
      },[]);
    
    return(
    <>
    <Nav/>
        <section class="w-full h-screen max-md:mt-0">
        <div class="h-full flex max-sm:bg-azullemuzas max-sm:justify-center ">
            <div class="w-[50%] bg-cover m-[10px] bg-img-home max-md:hidden max-sm:w-0  ">
            </div>
            <div class="flex w-[50%] m-[10px]  bg-azullemuzas container-text-home text-slate-50 text-center flex-col items-center justify-center max-md:bg-[length:100%_120%] max-md:bg-img-home max-md:w-full max-sm:bg-img-home max-sm:w-[90%] max-sm:bg-fixed max-sm:h-[100vh] ">
                    <h1 class="mb-[5px] text-[70px] font-bold max-sm:text-[40px] ">¡ BIENVENIDO A LEMUZAS !</h1>
                    <p class="mb-[50px] text-[20px]">Encuentra podructos de calidad al mejor precio</p>
                    <Link href="#Section2" class="rounded-xl px-[15px] py-[15px] bg-slate-50 text-[#808080] ease-out duration-300  hover:scale-105 max-md:hidden max-sm:hidden ">Conoce mas</Link>
            </div>
        </div>
    </section>
    <section class="w-full h-screen flex flex-col justify-center items-center text-center text-white" id="Section2">
        <div class="w-[80%] h-[80vh] flex flex-col justify-center items-center p-[10%] bg-azullemuzas rounded-3xl max-sm:p-[1%] max-sm:h-[65vh]">
            <div class="px-[30px] py-0 max-sm:px-[10px]">
                <h2 class="text-[80px] pb-4 font-bold max-sm:text-[45px] max-sm:pb-2">¿Quienes somos?</h2>
                <p class="text-5 pb-4 max-sm:text-3" >Lorem ipsum dolor sit amet consectetur adipiscing, elit rhoncus sed nullam. Mattis porta ut sapien bibendum imperdiet pulvinar fermentum nascetur vulputate, consequat lectus tempus tincidunt risus luctus tempor facilisis aliquam, arcu etiam per ad lacinia nisi leo cum. Faucibus volutpat erat fusce ac penatibus molestie nunc, nec malesuada imperdiet torquent porttitor inceptos, quam sollicitudin nulla sapien venenatis eu.</p>
            </div>
            <a href="#Section3" class="rounded-xl px-[15px] py-[15px] bg-slate-50 text-[#808080] ease-out duration-300  hover:scale-105 max-sm:hidden">Conoce nuestros productos</a>
        </div>
    </section>
    <section class="w-full flex justify-center items-center bg-azullemuzas" id="Section3">

        
            <ul class="w-[98%] h-[80%] list-none flex flex-row flex-nowrap overflow-scroll justify-start items-center max-sm:w-[100%]">
            {categorias.map((category) => (
                <li key={category.idCategoria} class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover">
                        </a>
                    </div>
                    <a href='www.google.com' class="text-center mt-5 max-sm:text-[15px]">{category.nombre}</a>
                    <p class="text-center mt-5 max-sm:text-[12px]">{category.descripcion}</p>
                </li>
            ))}
                
                
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">MUJER</p>
                </li>
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">HOGAR</p>
                </li>
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">CONJUNTOS</p>
                </li>
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">ACCESORIOS</p>
                </li>
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">BELLEZA</p>
                </li>
                <li class="my-[10px] mx-[20px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600 max-sm:w-24 max-sm:h-24">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5 max-sm:text-[15px]">SALUD</p>
                </li>
            </ul>
    </section>
    <Footer/>
    </>
);
}

export default Home;