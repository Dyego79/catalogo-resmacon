import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 pt-32 gap-6">
      <div className="flex justify-center lg:justify-end">
        <Link
          to={"/catalogo-general"}
          className="flex justify-center px-6 lg:px-1"
        >
          <img
            src="../images/catalogo_general@300x-100.jpg"
            alt=""
            className="hidden lg:block h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
          <img
            src="../images/catalogo-general-mobile.jpg"
            alt=""
            className="block lg:hidden w-[80%] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
      <div className="flex lg:justify-start">
        <Link
          to={"/catalogo-grafica"}
          className="flex justify-center px-6 lg:px-1"
        >
          <img
            src="../images/catalogo_grafica@300x-100.jpg"
            alt=""
            className="hidden lg:block h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
          <img
            src="../images/catalogo-grafica-mobile.jpg"
            alt=""
            className="block lg:hidden w-[80%] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
