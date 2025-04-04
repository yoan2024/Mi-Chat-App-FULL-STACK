import Flecha from "./IconFlecha";
const TarjetaFunciones = ({ titulo, parrafo }: textFuncionesProms) => {
  return (
    <div className="tarjetaFunciones">
      <h1 className="tituloFunciones">{titulo}</h1>
      <p className="parrafoFunciones">{parrafo}</p>
      <Flecha />
    </div>
  );
};

export default TarjetaFunciones;
