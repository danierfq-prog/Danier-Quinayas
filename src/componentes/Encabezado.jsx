import MenuUsuario from "./MenuUsuario"

function Encabezado({ usuario }){
    return(
        <header className="encabezado">
            <div className="encabezado-marca">
                <h1> Mi primera app con react</h1>

                <nav>
                    <a href="#"> inicio </a>
                    <a href="#"> Tecnologias </a>
                    <a href="#"> contacto </a>
                </nav>
            </div>
            <MenuUsuario usuario={usuario}/>
        </header>
    )
}

export default Encabezado