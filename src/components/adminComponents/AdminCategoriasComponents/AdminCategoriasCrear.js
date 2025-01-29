import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import crud from '../../../conexiones/crud';




const AdminCategoriasCrear =()=>{

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState({
        nombre:'',
        descripcion:'',
        imagen:null,
    });


    const {nombre, descripcion, imagen} = categoria;

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('imagen', imagen);
      
        try {
          const response = await crud.POST('/api/categorias', { method: 'POST', body: formData });
      
          if (!response.ok) {
            if (response.status === 400) {
              console.error('Error en la solicitud: ');
              // Try parsing the error response as JSON (assuming the server sends JSON for errors)
              const errorData = await response.json();
              if (errorData) {
                console.error('Error details:', errorData);
                // You can display specific error messages to the user based on the errorData
              } else {
                console.error('Error: Could not parse error response as JSON');
              }
            } else {
              console.error('Error del servidor:', response.status);
              // You can display a generic server error message to the user
            }
          } else {
            const data = await response.json();
            console.log(data);
            setCategoria({ nombre: '', descripcion: '', imagen: null });
            navigate("/Dashboard-Administracion/AdminCategorias");
          }
        } catch (error) {
          console.error('Error desconocido: ', error);
          // Show a generic error message to the user
        }
      };


    const onChange = (e) =>{
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    } 

    return(
    <>
        <section className='absolute w-4/5 h-[91.6%] bg-cyan-50 right-0 top-14 flex flex-col overflow-scroll'>
        <h3 className="font-semibold text-azullemuzas text-center my-10 text-3xl mb-2">Modulo para la creación de Categorias</h3>
        
        <form enctype ="multipart/form-data" className='p-10 rounded-3xl shadow  border-gray-300 bg-white flex flex-col w-2/6 mx-auto mt-10' onSubmit={handleSubmit}>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Nombre de la Categoria</label>
            <input className='mb-5 block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white' type='text' id='nombre' name='nombre' value={nombre} onChange={onChange}></input>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Descripción de la Categoria</label>
            <input className='mb-5 block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:text-white focus:bg-azullemuzas focus:ease-in focus:duration-300 focus:placeholder-white' type='text' id='descripcion' name='descripcion' value={descripcion} onChange={onChange}></input>
            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Carga la imagen de la categoria</label>
            <input className='mb-5' type='file' id='imagen' name='imagen' onChange={(e) => setCategoria({ ...categoria, imagen: e.target.files[0] })}></input>
            <input className='bg-azullemuzas w-full py-3 text-white font-bold rounded-lg hover:cursor-pointer hover:scale-95 hover:ease-in hover:duration-300' type='submit' value="Crear Categoria" ></input>
        </form>
        </section>
    </>
);
}

export default AdminCategoriasCrear;