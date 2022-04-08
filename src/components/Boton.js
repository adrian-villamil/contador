import '../css/Boton.css';

const Boton = (props) => {
    return (
        <button className={props.esClic ? 'boton-clic': 'boton-reiniciar'} onClick={props.funcion}>{props.texto}</button>
    )
}

export default Boton;