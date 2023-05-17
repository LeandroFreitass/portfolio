import Link from "next/link";
import React from "react";
import ButtonLink from "../../ButtonLink";

const saqueComple = () => {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300">
        <a href="https://github.com/lcunha957/Projeto_PetEyeCare.git">
          <img
            alt="Placeholder"
            class="block h-auto w-[110%]"
            src="/assets/logotipo.svg"
          />
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5 -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3>PetEyeCare</h3>
            <h4 className="text-center">
              Projeto do meu TCC onde a ideia é realizar o monitoramento de
              animais domésticos, especialmente equinos, quando o dono está fora
              de casa. Este é um código para ser utilizado no Arduino em
              conjunto com uma maquete.
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};
export default saqueComple;
