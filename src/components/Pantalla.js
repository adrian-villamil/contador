import '../css/Pantalla.css';

const Pantalla = (props) => {
    return (
        <div className="pantalla">
            <p>{props.valor}</p>
        </div>
    )
}

export default Pantalla;