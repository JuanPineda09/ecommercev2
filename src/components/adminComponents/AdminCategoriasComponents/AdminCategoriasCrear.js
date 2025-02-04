import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import crud from '../../../conexiones/crud';




const AdminCategoriasCrear =()=>{

const navigate = useNavigate();



const [categoria, setCategoria] = useState({
        nombre:'',
        descripcion:'',
        imagen: null
      })

      const { nombre, descripcion, imagen} = categoria;

const categoriaOnchange = (e) =>{
        setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
        }) 
    } 

const uploadFile = (e) =>{
  if (e.target.files && e.target.files[0]) {
    setCategoria({
      ...categoria,
      imagen: e.target.files[0]
    });
  } else {
    console.error("No se seleccionó ningún archivo.");
  }
}


  const sendHandler = async (e) => {
    e.preventDefault();
    if(!imagen || !descripcion || !nombre){
      alert('Todos los campos son obligatorios, incluyendo la imagen.');
      return
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    console.log(nombre)
    console.log(descripcion)
    console.log(imagen)
    console.log(imagen instanceof File)

    try {
      const response = await crud.POST('/api/categorias',
        formData)
      console.log(response);

      
      setCategoria({
        nombre:'',
        descripcion:'',
        imagen: null
      })

      navigate("/Dashboard-Administracion/AdminCategorias");

    } catch (error) {
      console.error("Error al enviar el formulario: ",error);
    }
    
  }

    return(
    <>
        <section className='absolute w-4/5 h-[91.6%] bg-cyan-50 right-0 top-14 flex flex-col overflow-scroll'>
        <h3 className="font-semibold text-azullemuzas text-center my-10 text-3xl mb-2">Modulo para la creación de Categorias</h3>
        
        <form className='p-10 rounded-3xl shadow  border-gray-300 bg-white flex flex-col w-2/6 mx-auto mt-10'>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Nombre de la Categoria</label>
            <input className='mb-5 block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white' type='text' id='nombre' name='nombre' value={nombre} onChange={categoriaOnchange}></input>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Descripción de la Categoria</label>
            <input className='mb-5 block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white' type='text' id='descripcion' name='descripcion' value={descripcion} onChange={categoriaOnchange}></input>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Carga la imagen de la categoria</label>
            <input className='mb-5' type='file' id='imagen' name='imagen' onChange={uploadFile}></input>
            <input className='bg-azullemuzas w-full py-3 text-white font-bold rounded-lg hover:cursor-pointer hover:scale-95 hover:ease-in hover:duration-300' onClick={sendHandler} type='submit' value="Crear Categoria" ></input>
        </form>
        </section>
    </>
);
}

export default AdminCategoriasCrear;