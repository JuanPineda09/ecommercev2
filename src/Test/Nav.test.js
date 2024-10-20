import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav'; // Ajusta la ruta al componente según tu estructura de archivos
import '@testing-library/jest-dom';

// Test básico de renderizado
describe('Nav Component', () => {
  
  test('renders the Nav component', () => {
    render(<Nav />);
    
    // Verifica si el logo (imagen) se renderiza correctamente
    const logoImage = screen.getByAltText('Logo'); 
    expect(logoImage).toBeInTheDocument();
    
    // Verifica si los enlaces de navegacion (Inicio, Sobre Nosotros, etc.) están en el DOM
    const inicioLink = screen.getByText('Inicio');
    const sobreNosotrosLink = screen.getByText('Sobre Nosotros');
    const productosLink = screen.getByText('Nuestros Productos');
    const contactoLink = screen.getByText('Contacto');
    
    expect(inicioLink).toBeInTheDocument();
    expect(sobreNosotrosLink).toBeInTheDocument();
    expect(productosLink).toBeInTheDocument();
    expect(contactoLink).toBeInTheDocument();
  });

  // desplegar el menú al hacer clic en el logo
  test('menu is toggled when clicking on the logo', () => {
    render(<Nav />);
    
    // Encuentra el logo (imagen)
    const logoImage = screen.getByAltText('Logo'); 
    
    // Verifica que el menú esté oculto inicialmente
    const menu = screen.getByRole('list');
    expect(menu).toHaveClass('hidden');
    
    // Simula un clic en el logo para desplegar el menú
    fireEvent.click(logoImage);
    
    // Verifica que el menú ahora esté visible (debería desaparecer la clase "hidden")
    expect(menu).not.toHaveClass('hidden');
    
    // Verifica que el menú contiene los enlaces de navegación
    const inicioLink = screen.getByText('Inicio');
    const sobreNosotrosLink = screen.getByText('Sobre Nosotros');
    const productosLink = screen.getByText('Nuestros Productos');
    const contactoLink = screen.getByText('Contacto');
    
    expect(inicioLink).toBeInTheDocument();
    expect(sobreNosotrosLink).toBeInTheDocument();
    expect(productosLink).toBeInTheDocument();
    expect(contactoLink).toBeInTheDocument();
  });

  // Test de interactividad: cerrar el menú cuando se hace clic en el logo nuevamente
  test('menu is closed when clicking on the logo again', () => {
    render(<Nav />);
    
    const logoImage = screen.getByAltText('Logo');
    const menu = screen.getByRole('list');
    
    // Asegúrate de que el menú esté inicialmente oculto
    expect(menu).toHaveClass('hidden');
    
    // Abre el menú
    fireEvent.click(logoImage);
    expect(menu).not.toHaveClass('hidden');
    
    // Cierra el menú
    fireEvent.click(logoImage);
    expect(menu).toHaveClass('hidden');
  });
});
