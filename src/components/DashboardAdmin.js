import React, { useEffect, useState, navigate } from 'react';

const DashboardAdmin = () => {

//     const tokenExpired = async ()=>{
//         const response = await crud.GET('/api/auth', data);
//         const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Manejar la autenticación al cargar el componente
//   useEffect(() => {
//     const jwt = response.token;
//     const storedToken = localStorage.getItem('token'); // Suponiendo que almacenas el token en el localStorage

//     if (storedToken) {
//       try {
//         // Decodificar el token
//         const decodedToken = jwt.decode(storedToken);
        
//         // Verificar si el token ha expirado
//         if (decodedToken.exp * 1000 < Date.now()) {
//           // Token expirado
//           console.log('Token ha expirado');
//           handleLogout(); // Llama a la función de logout o expira la sesión
//         } else {
//           // Token válido
//           setIsAuthenticated(true);
//         }
//       } catch (error) {
//         console.error('Error al decodificar el token', error);
//         handleLogout();
//       }
//     }
//   }, []);

//   // Función de logout para limpiar el estado y almacenamiento
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Elimina el token
//     setIsAuthenticated(false);
//     // Aquí puedes redirigir al usuario a una página de login, por ejemplo:
//     navigate('/login');
//   };
//     }
    
        





    
return(
    <>
    <h1 >Bienvenido al Dashboard de administrador</h1>
    {/* <div>
      {isAuthenticated ? (
        <h1>Bienvenido, estás autenticado</h1>
      ) : (
        <h1>Sesión expirada o no autenticado</h1>
      )}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div> */}
    </>
)
}

export default DashboardAdmin;