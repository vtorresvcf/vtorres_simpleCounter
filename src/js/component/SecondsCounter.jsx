import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  const [isRunCount, setisRunCount] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunCount) {
      interval = setInterval(() => {
        setCount((contador) => contador + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunCount]);

  // Convierto el contador en String, 6 cifras y añado el resto en 0
  const countString = String(count).padStart(6, "0");

  // Funcion para parar el contador
  const stopContador = () => {
    setisRunCount(false);
  };

  // Funcion para reiniciar el contador
  const reinicioContador = () => {
    setCount(0);
  };

  return (
    <>
      <div className={"contenido"}>
        <div className={"contenido-reloj"}>
          <FontAwesomeIcon icon="fa-solid fa-clock" />
          {countString}
        </div>
        <div className={"contenido-botones"}>
          <button
            type="button"
            className="btn btn-danger border-white"
            onClick={stopContador}
          >
            Parar contador
          </button>
          <button
            type="button"
            className="btn btn-success border-white"
            onClick={reinicioContador}
          >
            Reiniciar contador
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondsCounter;
