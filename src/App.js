import { useState } from 'react';
import './App.css';
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla';

function App() {
  const [contador, setContador] = useState(0);

  const iniciarContador = () => {
    setContador(contador + 1);
  }

  const reiniciarContador = () => {
    setContador(0);
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className='contenedor'>
        <Pantalla valor = {contador} />
        <Boton esClic = {true} texto = 'Iniciar' funcion = {iniciarContador} />
        <Boton esClic = {false} texto = 'Reiniciar' funcion = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;