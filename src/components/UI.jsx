import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const pictures = [
  "Catalogo-Resmacon-2024_02",
  "Catalogo-Resmacon-2024_03",
  "Catalogo-Resmacon-2024_04",
  "Catalogo-Resmacon-2024_05",
  "Catalogo-Resmacon-2024_06",
  "Catalogo-Resmacon-2024_07",
  "Catalogo-Resmacon-2024_08",
  "Catalogo-Resmacon-2024_09",
  "Catalogo-Resmacon-2024_10",
  "Catalogo-Resmacon-2024_11",
  "Catalogo-Resmacon-2024_12",
  "Catalogo-Resmacon-2024_13",
  "Catalogo-Resmacon-2024_14",
  "Catalogo-Resmacon-2024_15",
  "Catalogo-Resmacon-2024_16",
  "Catalogo-Resmacon-2024_17",
  "Catalogo-Resmacon-2024_18",
  "Catalogo-Resmacon-2024_19",
  "Catalogo-Resmacon-2024_20",
  "Catalogo-Resmacon-2024_21",
  "Catalogo-Resmacon-2024_22",
  "Catalogo-Resmacon-2024_23",
  "Catalogo-Resmacon-2024_24",
  "Catalogo-Resmacon-2024_25",
  "Catalogo-Resmacon-2024_26",
  "Catalogo-Resmacon-2024_27",
  "Catalogo-Resmacon-2024_28",
  "Catalogo-Resmacon-2024_29",
  "Catalogo-Resmacon-2024_30",
  "Catalogo-Resmacon-2024_31",
  "Catalogo-Resmacon-2024_32",
  "Catalogo-Resmacon-2024_33",
  "Catalogo-Resmacon-2024_34",
  "Catalogo-Resmacon-2024_35",
  "Catalogo-Resmacon-2024_36",
  "Catalogo-Resmacon-2024_37",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    };

    window.addEventListener("click", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, [page]);

  // Solo mostrar las páginas de carátulas
  const caratulasIndexes = [1, 6, 8, 11, 14, 15, 17];
  const pageNames = {
    1: "Resmas",
    6: "Rollos",
    8: "Higiene",
    11: "Limpieza",
    14: "Embalaje",
    15: "Bolsas",
    17: "Sobres ",
  };
  const filteredPages = pages.filter((_, index) =>
    caratulasIndexes.includes(index)
  );

  return (
    <>
      <main className="pointer-events-none z-10 fixed  inset-0  flex justify-between flex-col">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center absolute bottom-0">
          <div className="overflow-auto flex items-center gap-2 max-w-full p-2 lg:p-10">
            {filteredPages.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-3 py-1 rounded-full text-lg uppercase shrink-0 border ${
                  caratulasIndexes[index] === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(caratulasIndexes[index])}
              >
                {pageNames[caratulasIndexes[index]]}
                {/*    {pageNames[caratulasIndexes[index]] ||
                  `Carátula ${caratulasIndexes[index]}`} */}
              </button>
            ))}
            {/* <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Contra Tapa
            </button> */}
          </div>
        </div>
      </main>
    </>
  );
};
