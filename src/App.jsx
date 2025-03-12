import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'

function App() {
  // useState es un "hook" que permite añadir estado a los componentes funcionales
  // Aquí creamos una variable de estado 'count' con valor inicial 0
  // y una función 'setCount' que nos permitirá actualizar ese valor
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Mi Primera Aplicación React</h1>
      
      {/* Usando el componente Greeting con diferentes props */}
      <Greeting name="Usuario" message="Bienvenido a tu primera app con props" />
      
      {/* Esta tarjeta contiene un contador interactivo */}
      <div className="card">
        <h2>Contador Interactivo</h2>
        <p>Has hecho click {count} veces</p>
        <button onClick={() => setCount(count + 1)}>
          Incrementar contador
        </button>
        <button onClick={() => setCount(0)}>
          Reiniciar contador
        </button>
        {count > 5 && <p>¡Muchos clics!</p>}
      </div>

      {/* Información adicional */}
      <div className="info">
        <p>
          Edita <code>src/App.jsx</code> y guarda para ver los cambios en tiempo real.
        </p>
      </div>
    </div>
  )
}

export default App