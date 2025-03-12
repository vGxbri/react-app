function Greeting(props) {
  return (
    <div className="greeting-card">
      <h2>Hola, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  )
}

export default Greeting