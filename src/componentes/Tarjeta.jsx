function Tarjeta({ titulo = 'React', descripcion = 'Biblioteca de JavaScript para construir interfaces.', icono = '⚛️' }) {
  return (
    <article className='tarjeta'>
      <div className='tarjeta-icono'>{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  )
}

export default Tarjeta