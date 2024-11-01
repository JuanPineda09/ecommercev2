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
      idRole: '',
    });
  
    const { idUsuario, nombre, email, password, confirmar, idRole} = usuario;
  
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
          idRole: usuario.idRole,
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
            idRole:'',
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
        <main className='container mx-auto mt-5 md:mt-12 p-5 md:flex md:justify-center'>
        <div className='md:w-2/3 lg:w-2/5 border-2 rounded-3xl pt-6 px-4'>
          <Link to={"/login"}>
            <img className='hover:scale-90' src='https://res.cloudinary.com/dhykdpajo/image/upload/v1670863094/Proyecto%20MinTic/arrow-back-regular-36_kkhqxf.png' alt='atras'></img>
          </Link>
          <h1 className="flex justify-center bg-gradient-to-r from-linio-primary to-linio-secondary py-6 drop-shadow-lg bg-clip-text font-display text-5xl tracking-tight text-transparent">REGISTRO</h1>
          <form onSubmit={onSubmit} className='my-10 bg-white shadow-orange-500 rounded-lg px-10'>
            <div className='my-5'>
            <label className='uppercase text-gray-600 block text-xl font-bold'>Cedula</label>
              <input
              id="idUsuario"
              name="idUsuario"
              type="number"
              placeholder="Digite su numero de cedula"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={idUsuario}
              onChange={onChange}
              />

            <label className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
              <input
              id="nombre"
              name="nombre"
              type="nombre"
              placeholder="Digite su nombre"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={nombre}
              onChange={onChange}
              />
              <label className='uppercase text-gray-600 block text-xl font-bold pt-3'>Email</label>
              <input
              type="email"
              id="email"
              name="email"
              placeholder="Email de Registro"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={email}
              onChange={onChange}/>
              
              <label className='uppercase text-gray-600 block text-xl font-bold pt-3'>Password</label>
              <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={password}
              onChange={onChange}/>
              <label className='uppercase text-gray-600 block text-xl font-bold pt-3'>Confirmar</label>
              <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Confirme su Password"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={confirmar}
              onChange={onChange}/>
              
              <label className='uppercase text-gray-600 block text-xl font-bold'>rol</label>
              <input
              id="idRole"
              name="idRole"
              type="number"
              placeholder="Digite su nombre"
              className='w-full mt-3 p-3 border rounded-lg bg-gray-50'
              value={idRole}
              onChange={onChange}
              />

              <div className='pt-5'>
              <input
                type="submit"
                value="Crear Cuenta"
                className="bg-gradient-to-r from-linio-primary to-linio-secondary py-3 w-full drop-shadow-lg text-white uppercase font-bold rounded hover:cursor-pointer "/>
              </div>
              
            </div>
          </form>
  
  
  
  
        </div>
       </main>     
      );
  }
  
  export default CrearCuenta;