import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from '../conexiones/crud';

const CrearCuenta = () => {

    const navigate = useNavigate();
  
    const [usuario, setUsuario] = useState({
        idUsuario:'',
      nombre: '',
      email: '',
      password: '',
      confirmar: '',
      idRole: '2',
    });
  
    const { idUsuario, nombre, email, password, confirmar} = usuario;
  
    const onChange = (e) =>{
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
    }
  
    const crearCuenta = async () =>{
      //Los dos password deben ser iguales
      if(password !== confirmar){
        console.log("La contraseña es diferente");
        const mensaje = "Las contraseñas son diferentes.";
      }else{
        const data = {
            idUsuario: usuario.idUsuario,
          nombre: usuario.nombre,
          email: usuario.email,
          password: usuario.password,
          idRole: '2',
        }
        console.log(data);
        const response = await crud.POST(`/api/users`, data);
        const mensaje = response.msg;
        //En la funcion booleana el mensaje del back debe ser identico al de la funcion si no genera error
        if(mensaje === 'El usuario ya existe'){
          const mensaje = "El usuario ya existe";
        
        }else{
          const mensaje = "Usuario creado correctamente";
        
          setUsuario({
            idUsuario:'',
            nombre:'',
            email: '',
            password: '',
            confirmar: '',
            idRole:'2',
          })
          //redireccionar pantalla login
          navigate("/login");
        }
      }
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      crearCuenta();
    }
  
  
  
  
      return(
        
        <>
        <section class="py-40 bg-gray-50 h-[200%]">
  <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Link to={"/"} class="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">
    <img class="w-10 h-10 mr-2" src="https://res.cloudinary.com/dhykdpajo/image/upload/v1731373159/Proyecto%20Lemuzas/Logo_jdtlyj.svg" alt="logo"></img>
          Lemuzas    </Link>
      <div class="w-full h-{100%}  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Crea tu cuenta
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <div>
                      <label for="cedula" class="block mb-2 text-sm font-medium text-gray-900 ">CEDULA</label>
                      <input type="number" name="idUsuario" id="idUsuario" placeholder="Digita tu cedula" value={idUsuario} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required></input>
                  </div>
                  <div>
                      <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 ">NOMBRE</label>
                      <input type="text" name="nombre" id="nombre" placeholder="Digita tu Nombre" value={nombre} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required></input>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">CORREO</label>
                      <input type="email" name="email" id="email" placeholder="example@dominio.com" value={email} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required></input>
                  </div>
                  
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CONTRASEÑA</label>
                      <input type="password" name="password" id="password" placeholder="Contraseña" value={password} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CONFIRMA TU CONTRASEÑA</label>
                      <input type="password" name="confirmar" id="confirmar" placeholder="Contraseña" value={confirmar} onChange={onChange} class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white" required=""></input>
                  </div>
                    <input
                        type="submit"
                        value="Crea Cuenta"
                        className="bg-azullemuzas w-full py-3 text-white font-bold rounded-lg hover:cursor-pointer hover:scale-95 hover:ease-in hover:duration-300"/>
              </form>
          </div>
      </div>
  </div>
</section>
        </> 
      );
  }
  
  export default CrearCuenta;