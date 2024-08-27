import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { useRef } from "react";
import { UI } from "./UI";
import { Link } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { IoBookOutline } from "react-icons/io5";

function CatalogoGeneral() {
  const orbitControlsRef = useRef();
  const resetControls = () => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset(); // Resetea los controles a su estado inicial
    }
  };

  return (
    <>
      <div className="text-white absolute w-full flex justify-center z-20">
        <Link
          to={"/catalogo-grafica"}
          className="uppercase text-gray-800 font-bold bg-yellow-400 p-3 lg:p-5 rounded-b-lg"
        >
          Catalogo Gráficas
        </Link>
      </div>

      <UI />
      <button
        className="absolute right-2 top-2 items-center text-white cursor-pointer p-2 mr-2 flex flex-col z-20 rounded-md"
        onClick={resetControls}
      >
        <IoBookOutline size={40} />
        <span className="text-[0.7rem] font-black">VER FRENTE</span>
      </button>
      <Loader />
      <Canvas shadows camera={{ position: [0, -0.5, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={"null"}>
            <Experience orbitControlsRef={orbitControlsRef} />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default CatalogoGeneral;
