import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from '../conexiones/crud';

const Login = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
      });

    const {email, password} = usuario;

    const onChange = (e) =>{
        setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
        })
      }
      const autenticarUsuario = async () =>{
        const data = {
          email: usuario.email,
          password: usuario.password
        }
       
        const response = await crud.POST('/api/auth', data);
        
        const mensaje = response.msg;

        if(mensaje === "El usuario no existe"){
          }
          else if(mensaje === "password incorrecto"){
        }else{
            const jwt = response.token;
      
            localStorage.setItem('token', jwt);
      
            navigate("/Dashboard-Administracion");
          }}

         
          const onSubmit = (e) => {
            e.preventDefault();
            autenticarUsuario();
          }
          
    
    return(
        <>
        <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Link to={"/"} class="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
    <img class="w-10 h-10 mr-2" src="https://res.cloudinary.com/dhykdpajo/image/upload/v1731373159/Proyecto%20Lemuzas/Logo_jdtlyj.svg" alt="logo"></img>
          Lemuzas    </Link>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Ingresa a tu cuenta
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Ingresa tu correo</label>
                      <input type="email" name="email" id="email" placeholder="example@dominio.com" value={email} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingresa tu contraseña</label>
                      <input type="password" name="password" id="password" placeholder="Contraseña" value={password} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required=""></input>
                  </div>
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-azullemuzas w-full py-3 text-white font-bold rounded-lg hover:cursor-pointer hover:scale-95 hover:ease-in hover:duration-300"/>
                  <div class="w-full flex justify-between">
                    <Link to={"/"}><p class="text-sm font-medium text-primary-600 text-center hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</p></Link>
                    <Link to={"/crear-cuenta"}><p class=" text-sm text-center font-light text-gray-500 dark:text-gray-400 hover:underline">¿Aún no tienes una cuenta?</p></Link>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
        </>
    )
}

export default Login;