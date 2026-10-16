import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'


function App() {
  const programa = 'Análisis y Desarrollo de Software'

  return (
    <div className='pagina'>
      <Encabezado />

      <div className='layout'>
        <Sidebar />
      <main className='contenido'>
        <h2>Bienvenidos al programa {programa}</h2>
        <Presentacion />

        <section className='tarjetas'>
          <Tarjeta 
          icono="⚛️"
          titulo="React"
          descripcion="Biblioteca de JavaScript para construir interfaces con componentes."
          horas="120"
          destacada={true}
          />
          <Tarjeta
            icono="⚡"
            titulo="vite"
            descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto"
            horas={60}
            destacada={false}
          />
          <Tarjeta
            icono="🔎"
            titulo="Eslint"
            descripcion="revisa la calidad del código y encuentra errores de sintaxis y estilo"
            horas={20}
            destacada={true}
          />
          
        </section>
      </main>
      </div>

      <PiePagina />
    </div>
  )
}

export default App