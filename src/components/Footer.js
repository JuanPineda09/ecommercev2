import wa from "../Utils/bxl-whatsapp.svg";
import instagram from "../Utils/bxl-instagram-alt.svg";
import facebook from "../Utils/bxl-facebook-circle.svg";
import map from "../Utils/bxs-map.svg";

const Footer =()=>{
    return(
    <>
           <footer class="w-full flex flex-col justify-center items-center font-thin">
        <h3>Contactanos</h3>
        <div class="w-[40%] h-4 bg-white flex justify-center items-center my-4">
            <a href="productos.html">
                <img src={wa} alt="Logo Whats App"/>
            </a>
            <a href="productos.html">
                <img src={instagram} alt="Logo Instagram"/>
            </a>
            <a href="productos.html">
                <img src={facebook} alt="Logo Facebook"/>
            </a>
            <a href="productos.html">
                <img src={map} alt="Logo Map"/>
            </a>
        </div>
    </footer> 
    </>
);
}

export default Footer;