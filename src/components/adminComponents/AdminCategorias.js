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
        <section className='bg-cyan-50 z-0 absolute w-4/5 h-[90%] right-0 top-14 flex flex-col overflow-hidden'>
        <h3 className="font-bold text-azullemuzas text-center mt-8 text-2xl">MODULO DE CATEGORIAS</h3>
        <table className='w-[90%] h-4/5 block overflow-y-auto bg-white  rounded-2xl text-center drop-shadow-lg mx-auto my-4'>

            <tr className='border-azullemuzas border-b-[2px] w-full'>
                <th className="text-lg">Id</th>
                <th className="text-lg">Categoria</th>
                <th className="text-lg">Descripcion</th>
                <th className="text-lg">Imagen</th>
                <th className="text-lg">Fecha de Creación</th>
                <th className="text-lg">Acciones</th>
            </tr>
            {showCategories.map(category=>(
                <tr key={category.idCategoria} >
                <td className='w-[10%]'>{category.idCategoria}</td>
                <td className='w-[15%]'>{category.nombre}</td>
                <td className='w-1/4'>{category.descripcion}</td>
                <td className='w-[20%] h-[150px]'>
                    <img className='w-48 h-48 object-fill' src={`http://localhost:4000/${category.imagen}`}></img>
                </td>
                <td className='w-[10%]'>{category.creacion}</td>
                <td className='w-[10%]'>Acciones</td>
                </tr>
            ))}
            
        </table>

        <NavLink to='/Dashboard-Administracion/AdminCategoriasCrear' className="flex justify-center h-[45px] text-white bg-azullemuzas mx-[75px] py-[10px] rounded-3xl">Crear Categoria</NavLink>
        <Outlet/>

        </section>
    </>
);
}

export default AdminCategorias;