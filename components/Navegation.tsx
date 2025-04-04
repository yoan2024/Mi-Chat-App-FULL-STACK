"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import TarjetaFunciones from "./TarjetaFunciones";

const textFunciones = [
  {
    titulo: "Util",
    parrafo:
      "Con esta herramienta de conexion para todos los dias, tu familia y tus amigos sabran que estas presente",
  },
  {
    titulo: "Funciones sociales",
    parrafo:
      "Crea una comunidad con personas con las que compartes pasiones e intereses",
  },
  {
    titulo: "Expresivo",
    parrafo:
      "Deja que tu personalidad brille y expresate mas alla de lo que permiten las palabras",
  },
];

export function Navegation() {
  const [opacity, setOpacity] = useState(0);
  const [funcionesNav, setFuncionesNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      let opacity = Math.min(scroll / 200, 1);
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navegation">
      <div
        className="layout-navegation"
        style={{
          borderBottom: `2px solid rgba(127, 140, 141, ${opacity})`,
          backgroundColor: `rgba(255, 255, 255, ${0.9})`,
        }}
      >
        <div className="flex flex-row w-full justify-around p-9">
          <div className="layout-icon-message">
            <a href="https://www.messenger.com/">
              <span>
                <Image
                  src="/image/messenger.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className="icon-message"
                />
              </span>
            </a>
          </div>

          <ol className="lista-nav">
            <li
              className="items-nav flex-row items-center"
              onClick={() => setFuncionesNav(!funcionesNav)}
            >
              Funciones <span className="flecha">▼</span>
            </li>
            <li className="items-nav">Privacidad y seguridad</li>
            <li className="items-nav">App para computadoras</li>
            <li className="items-nav ">Para desarrolladores</li>
            <li className="items-nav">Servicio de ayuda</li>
          </ol>
          <div className="layout-icon-tresrayas">
            <a href="https://www.messenger.com/">
              <span className="icon-tresrayas">
                <Image
                  src="/image/tresrayas.png"
                  width={60}
                  height={40}
                  alt="icon"
                  className="icon-tresrayas"
                />
              </span>
            </a>
          </div>
        </div>

        {funcionesNav && (
          <div className="mt-5 flex flex-row p-5 gap-10 justify-center">
            <TarjetaFunciones
              titulo={textFunciones[0].titulo}
              parrafo={textFunciones[0].parrafo}
            />
            <TarjetaFunciones
              titulo={textFunciones[1].titulo}
              parrafo={textFunciones[1].parrafo}
            />
            <TarjetaFunciones
              titulo={textFunciones[2].titulo}
              parrafo={textFunciones[2].parrafo}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navegation;
