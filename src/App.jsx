import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import { tecnologias } from './data/tecnologias'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import fotoPerfil from './Images/perfil.jpg'
import Inicio from './paginas/Inicio'
import Perfil from './paginas/Perfil'
import { Route, Routes } from 'react-router'


function App() {

  const usuario = {
    nombre: "Danier Fernando Quinayas Cordoba",
    rol: "Aprendiz ADSO",
    foto: fotoPerfil,
    correo: "danierf.q@gmail.com",
  };

  return (

    <div className="pagina">
      <Encabezado usuario={usuario} />
      <div className="layout">
        <Sidebar />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
      <PiePagina />
    </div>
  )
}

export default App