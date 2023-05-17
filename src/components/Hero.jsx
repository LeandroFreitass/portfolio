import Link from "next/link";
import React from "react";
import Button from "./Button";
import { BsWhatsapp,BsEnvelope, BsInstagram, BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='bg-[url("/fundoHero.jpg")] h-screen bg-cover bg-no-repeat  bg-center flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="text-white flex flex-col gap-[20px] md:gap-[40px] mx-auto text-center">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
            Olá, eu sou Leandro, um desenvolvedor full stack que está constantemente aprimorando seus conhecimentos a cada dia
            </h1>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
              <p className="text-white">Seja bem vindo ao meu portifolio.</p>
            </h2>
          </div>

          <div>
            <div className="text-center">
              <p className="text-sm md:text-xl text-gray-300 tracking-widest ">
              Dúvidas ou interesse em entrar em contato para trabalho, abaixo estão as minhas informações de contato. Logo abaixo, você encontrará alguns projetos que desenvolvi, porém estou constantemente aprimorando-os. Caso deseje utilizar outro meio para entrar em contato, há um formulário disponível.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[50] z-10 flex flex-col gap-5 items-center ">
        <div className="bg-gray-800 rounded-sm p-2">
        <Link
            legacyBehavior
            href="mailto:leandro.hugo.freitas@gmail.com"
            className="transform hover:-translate-x-1.5 duration-300"
          >
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10"
            >
              <BsEnvelope size={25} className="text-white" />
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://api.whatsapp.com/send?phone=5519995447553&text=Bem-vindo%20ao%20meu%20WhatsApp!%20Fique%20%C3%A0%20vontade%20para%20contatos%20profissionais%20e%20para%20tirar%20qualquer%20d%C3%BAvida%20que%20tiver."
            className="transform hover:-translate-x-1.5 duration-300"
          >
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10"
            >
              <BsWhatsapp size={25} className="text-white" />
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://www.instagram.com/lean_drofreitas/"
            className="transform hover:-translate-x-1.5 duration-300"
          >
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10"
            >
              <BsInstagram size={25} className="text-white" />
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://github.com/LeandroFreitass"
            className="transform hover:-translate-x-1.5 duration-300"
          >
            <a
              target="_blank"
              className="flex items-center justify-center h-10 w-10"
            >
              <BsGithub size={25} className="text-white" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
