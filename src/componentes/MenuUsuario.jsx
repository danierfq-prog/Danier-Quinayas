import fotoperfil from '../imagenes/cosmico.avif'

function MenuUsuario() {
  const nombre = 'Danier Fernando Quinayas'
  const rol = 'Estudiante Adso'

  return (
    <div className='menu-usuario'>
      <button type='button' className='menu-usuario-boton'>
        <img src={fotoperfil} alt={`foto de ${nombre}`} className='avatar' />
        <span className='menu-usuario-datos'>
          <span className='menu-usuario-nombre'>{nombre}</span>
          <span className='menu-usuario-rol'>{rol}</span>
        </span>
        <span className='felcha'>⬇️</span>
      </button>

      <ul className='menu-ddesplegable'>
        <li><a href='#'>🙎 mi perfil</a></li>
        <li><a href='#'>⚙️ configuracion</a></li>
        <li className='separador'></li>
        <li><a href='#' className='cerrar-sesionn'>🔒 cerrar sesion</a></li>
      </ul>
    </div>
  )
}

export default MenuUsuario