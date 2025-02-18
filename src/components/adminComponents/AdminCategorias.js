import React,{ useState, useEffect} from "react";
import { Outlet, NavLink } from 'react-router-dom';
import crud from '../../../src/conexiones/crud'

const AdminCategorias =()=>{

    const [showCategories, setShowCategories] = useState([]);

    const uploadCategorie = async ()=>{
        const response = await crud.GET(`/api/categorias`)
        setShowCategories(response);
        console.log(response)
    }

    useEffect(()=>{
        uploadCategorie();
    },[]);

    return(
    <>
        <section className='bg-cyan-50 z-0 absolute w-4/5 h-[91.6%] right-0 top-14 flex flex-col overflow-scroll'>
        <h3 className="font-bold text-azullemuzas text-center my-10  text-2xl mb-2">MODULO DE CATEGORIAS</h3>
        <table className='w-[90%]  bg-white  rounded-2xl text-center drop-shadow-lg mx-auto my-8'>

            <tr className='border-azullemuzas border-b-[2px]'>
                <th>Id</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Fecha de Creación</th>
                <th>Acciones</th>
            </tr>
            {showCategories.map(category=>(
                <tr key={category.idCategoria}>
                <td className='w-[10%]'>{category.idCategoria}</td>
                <td className='w-[15%]'>{category.nombre}</td>
                <td className='w-1/4'>{category.descripcion}</td>
                <td className='w-[30%]'>
                    <img className='w-full h-full object-cover' src={`http://localhost:4000/${category.imagen}`}></img>
                </td>
                <td className='w-[10%]'>Fecha de Creación</td>
                <td className='w-[10%]'>Acciones</td>
                </tr>
            ))}
            
        </table>

        <NavLink to='/Dashboard-Administracion/AdminCategoriasCrear'>Crear Categoria</NavLink>
        <Outlet/>

        </section>
    </>
);
}

export default AdminCategorias;