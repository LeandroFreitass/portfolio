import React from "react";
import Link from "next/link";
import { BsWhatsapp, BsEnvelope, BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-gray-700 h-1/2 w-full flex md:flex-row flex-row justify-center items-start p-16">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <ul>
            <p className="text-white font-bold text-xl pb-4">
              <a>CANAIS DE CONTATO</a>
            </p>
            <li>
            <div className="flex justify-center">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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

            </li>
          </ul>
        </div>
      </div>

      <div
        id="contatos"
        className="flex flex-col justify-center items-center text-center  p-5 bg-black"
      >
        <h1 className=" text-white font-semibold">
          © 2023 Todos os direitos reservados - <br />
          <span className="font-semibold">Leandro Hugo </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
