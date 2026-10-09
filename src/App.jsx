import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'

function App() {
  const programa = 'Analisis y Desarrollo de Software'

  const tecnologias = [
    {
      titulo: 'React',
      descripcion: 'Biblioteca de JavaScript para crear interfaces modernas y reutilizables.',
      icono: '⚛️',
    },
    {
      titulo: 'CSS',
      descripcion: 'Diseño visual limpio, responsive y con estilos profesionales.',
      icono: '🎨',
    },
    {
      titulo: 'Vite',
      descripcion: 'Herramienta rápida para iniciar y compilar proyectos front-end.',
      icono: '⚡',
    },
  ]

  return (
    <div className="pagina">
      <Encabezado />

      <div className="layout">
        <Sidebar />

        <main className="contenido">
          <section className="hero">
            <div className="hero-texto">
              <p className="eyebrow">Bienvenido</p>
              <h2>Programa de {programa}</h2>
              <p className="hero-descripcion">
                Desarrollo habilidades técnicas para crear soluciones digitales con impacto real.
              </p>
            </div>
          </section>

          <Presentacion />

          <section className="tarjetas">
            {tecnologias.map((tecnologia) => (
              <Tarjeta
                key={tecnologia.titulo}
                titulo={tecnologia.titulo}
                descripcion={tecnologia.descripcion}
                icono={tecnologia.icono}
              />
            ))}
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
  )
}

export default App