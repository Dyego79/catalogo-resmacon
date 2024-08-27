import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 pt-32 gap-6">
      <div className="flex lg:justify-end">
        <Link to={"/catalogo-general"}>
          <img
            src="../images/catalogo_general@300x-100.jpg"
            alt=""
            className="h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
      <div className="flex lg:justify-start">
        <Link to={"/catalogo-grafica"}>
          <img
            src="../images/catalogo_grafica@300x-100.jpg"
            alt=""
            className="h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
