import { Link } from 'react-router-dom'; 
import Nav from './Nav'
import Footer from './Footer';
const Home =()=>{
    return(
    <>
    <Nav/>
        <section class="w-full h-screen mt-[5%]">
        <div class="flex">
            <div class="w-[50%] bg-auto bg-img-home">
            </div>
            <div class="flex w-[50%] h-[92vh] bg-azullemuzas container-text-home text-slate-50 text-center flex-col items-center justify-center">
                    <h1 class="mb-[5px] text-[70px]">¡ BIENVENIDO A LEMUZAS !</h1>
                    <p class="mb-[50px] text-[20px]">Encuentra podructos de calidad al mejor precio</p>
                    <Link href="#Section2" class="btn home">Conoce mas</Link>
            </div>
        </div>
    </section>
    <section class="section-description" id="Section2">
        <div class="container-description">
            <div class="box-description">
                <h2 class="title-description">¿Quienes somos?</h2>
                <p class="parrafo-description">Lorem ipsum dolor sit amet consectetur adipiscing, elit rhoncus sed nullam. Mattis porta ut sapien bibendum imperdiet pulvinar fermentum nascetur vulputate, consequat lectus tempus tincidunt risus luctus tempor facilisis aliquam, arcu etiam per ad lacinia nisi leo cum. Faucibus volutpat erat fusce ac penatibus molestie nunc, nec malesuada imperdiet torquent porttitor inceptos, quam sollicitudin nulla sapien venenatis eu.</p>
            </div>
            <a href="#Section3" class="btn description">Conoce nuestros productos</a>
        </div>
    </section>
    <section class="section-categories" id="Section3">
            <ul class="container-categories">
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories one"></a>
                    </div>
                    <p class="description-categories">HOMBRE</p>
                </li>
                
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories two"></a>
                    </div>
                    <p class="description-categories">MUJER</p>
                </li>
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories three"></a>
                    </div>
                    <p class="description-categories">HOGAR</p>
                </li>
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories four"></a>
                    </div>
                    <p class="description-categories">CONJUNTOS</p>
                </li>
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories five"></a>
                    </div>
                    <p class="description-categories">ACCESORIOS</p>
                </li>
                <li class="content-categories">
                    <div class="box-categories">
                        <a href="productos.html" class="img-categories six"></a>
                    </div>
                    <p class="description-categories">BELLEZA Y SALUD</p>
                </li>
            </ul>
    </section>
    <Footer/>
    </>
);
}

export default Home;