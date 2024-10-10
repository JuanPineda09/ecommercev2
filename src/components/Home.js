import { Link } from 'react-router-dom'; 
import Nav from './Nav'
import Footer from './Footer';
const Home =()=>{
    return(
    <>
    <Nav/>
        <section class="w-full h-screen mt-[5%]">
        <div class="flex">
            <div class="w-[50%] bg-[length:100%_120%] bg-img-home">
            </div>
            <div class="flex w-[50%] h-[86vh] mr-[2px] bg-azullemuzas container-text-home text-slate-50 text-center flex-col items-center justify-center">
                    <h1 class="mb-[5px] text-[70px]">¡ BIENVENIDO A LEMUZAS !</h1>
                    <p class="mb-[50px] text-[20px]">Encuentra podructos de calidad al mejor precio</p>
                    <Link href="#Section2" class="rounded-xl px-[15px] py-[15px] bg-slate-50 text-[#808080] ease-out duration-300  hover:scale-105">Conoce mas</Link>
            </div>
        </div>
    </section>
    <section class="w-full h-screen flex flex-col justify-center items-center text-center text-white" id="Section2">
        <div class="w-[80%] h-[80vh] flex flex-col justify-center items-center p-[10%] bg-azullemuzas rounded-xl ">
            <div class="px-[30px] py-0">
                <h2 class="text-[80px] pb-4">¿Quienes somos?</h2>
                <p class="text-5 pb-4">Lorem ipsum dolor sit amet consectetur adipiscing, elit rhoncus sed nullam. Mattis porta ut sapien bibendum imperdiet pulvinar fermentum nascetur vulputate, consequat lectus tempus tincidunt risus luctus tempor facilisis aliquam, arcu etiam per ad lacinia nisi leo cum. Faucibus volutpat erat fusce ac penatibus molestie nunc, nec malesuada imperdiet torquent porttitor inceptos, quam sollicitudin nulla sapien venenatis eu.</p>
            </div>
            <a href="#Section3" class="rounded-xl px-[15px] py-[15px] bg-slate-50 text-[#808080] ease-out duration-300  hover:scale-105">Conoce nuestros productos</a>
        </div>
    </section>
    <section class="w-full h-vh flex justify-center items-center bg-azullemuzas" id="Section3">
            <ul class="w-98% h-80% list-none flex flex-row flex-nowrap overflow-x-scroll justify-start items-center">
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">HOMBRE</p>
                </li>
                
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">MUJER</p>
                </li>
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">HOGAR</p>
                </li>
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">CONJUNTOS</p>
                </li>
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">ACCESORIOS</p>
                </li>
                <li class="m-[10px]">
                    <div class="bg-white w-48 h-48 rounded-full flex flex-col justify-center items-center shadow-md shadow-slate-600">
                        <a href="productos.html" class="w-[90%] h-[90%] rounded-full bg-[length:100%] object-cover"></a>
                    </div>
                    <p class="text-center mt-5">BELLEZA Y SALUD</p>
                </li>
            </ul>
    </section>
    <Footer/>
    </>
);
}

export default Home;