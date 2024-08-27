import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useRef } from "react";
import { UIgrafica } from "./UI-grafica";
import { Link } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { IoBookOutline } from "react-icons/io5";
import { ExperienceGrafica } from "./ExperienceGrafica";

function CatalogoGrafica() {
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
          to={"/catalogo-general"}
          className="uppercase text-gray-800 font-bold bg-yellow-400 p-3 lg:p-5 rounded-b-lg"
        >
          Catalogo General
        </Link>
      </div>

      <UIgrafica />
      <button
        className="absolute right-2 top-2 items-center text-white cursor-pointer p-2 mr-2 flex flex-col z-20 rounded-md"
        onClick={resetControls}
      >
        <IoBookOutline size={40} />
        <span className="text-[0.7rem] font-black">VER FRENTE</span>
      </button>
      <Loader />
      <Canvas
        shadows
        camera={{ position: [0, 1, 4], fov: 45 }}
        className="overflow-x-hidden"
      >
        <group position-y={0}>
          <Suspense fallback={"null"}>
            <ExperienceGrafica orbitControlsRef={orbitControlsRef} />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default CatalogoGrafica;
