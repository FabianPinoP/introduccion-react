import Cards from "./cards";


const Saludar = ({ name, direccion, login }) => {
  console.log(name);
  return (
    <div>
      hola {name} mi direccion es {direccion}
      {login ? <p>estoy logueado</p> : <p>no estoy logueado</p>}
      <Cards />
    </div>
    
  );
};

export default Saludar;
