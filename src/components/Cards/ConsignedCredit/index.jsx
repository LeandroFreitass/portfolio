import React from "react";

const ConsignedCredit = () => {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300">
        <a href="https://github.com/LeandroFreitass/CRUD-Marca-De-Times.git">
          <img
            alt="Placeholder"
            class="block h-auto w-[110%]"
            src="/assets/escola-2.webp"
          />
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5 -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3>Projeto Aluno</h3>
            <h4 className="text-center">
              Como proposta de uma aula, a ideia é criar um CRUD para o cadastro
              de alunos, onde serão registrados o período, o curso e o aluno que
              está cursando essa aula.
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ConsignedCredit;
