import foto from '../Images/perfil.jpg'

function Presentacion() {
  return (
    <section className="presentacion">
      <article className="perfil-card">
        <div className="perfil-imagen-wrap">
          <img src={foto} alt='Mi foto' className='perfil-imagen' />
        </div>

        <div className="perfil-info">
          <p className="perfil-etiqueta">Mi perfil</p>
          <h1>Danier Fernando Quinayas</h1>
          <p className='perfil-barrio'>Barrio: Las veraneras</p>

          <div className='perfil-contacto'>
            <h4>Medios de contacto</h4>
            <p>Correo: danierf.q@gmail.com</p>
            <p>Teléfono: +57 3104644858</p>
          </div>

          <p className='perfil-descripcion'>Soy aprendiz del SENA de V trimestre.</p>
        </div>
      </article>
    </section>
  )
}

export default Presentacion