import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed bg-white top-0 w-[100%] h-[11%] z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex gap-1 bg-red-900 rounded-sm">
          <Link href="/">
            <div className="rounded-full">
              <Image
                src="/assets/fotoPerfil.jpg"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-10 tracking-wider ">
          <Link legacyBehavior href="/">
            <a className="hover:text-gray-700 font-bold text-lg	text-black">
              INÍCIO
            </a>
          </Link>
          <Link legacyBehavior href="#projetos">
            <a className="hover:text-gray-700 font-bold text-lg text-black">
              PROJETOS
            </a>
          </Link>
          <Link legacyBehavior href="#conhecimentos">
            <a className="hover:text-gray-700 font-bold text-lg text-black">
              CONHECIMENTOS
            </a>
          </Link>
          <Link legacyBehavior href="#formulario">
            <a className="hover:text-gray-700 font-bold text-lg text-black">
              FORMULARIO
            </a>
          </Link>
          <Link legacyBehavior href="#contatos">
            <a className="hover:text-gray-700 font-bold text-lg text-black">
              CONTATO
            </a>
          </Link>
        </div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block text-black"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block text-black"
          />
        )}
      </div>
      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[72px] ${
          toggle ? `left-[0]` : `left-[-100%]`
        }`}
      >
        <div className="hover:text-gray-700 p-5 font-bold text-lg">
          <a className="hover:text-gray-700 font-bold text-lg	text-white">
            INÍCIO
          </a>
        </div>

        <div className="hover:text-gray-700 p-5 font-bold text-lg">
          <Link legacyBehavior href="#projetos">
            <a className="hover:text-gray-700 font-bold text-lg text-white">
              PROJETOS
            </a>
          </Link>
        </div>

        <div className="hover:text-gray-700 p-5 font-bold text-lg">
          <Link legacyBehavior href="#conhecimentos">
            <a className="hover:text-gray-700 font-bold text-lg text-white">
              CONHECIMENTOS
            </a>
          </Link>
        </div>

        <div className="hover:text-gray-700 p-5 font-bold text-lg">
          <Link legacyBehavior href="#formulario">
            <a className="hover:text-gray-700 font-bold text-lg text-white">
              FORMULARIO
            </a>
          </Link>
        </div>

        <div className="hover:text-gray-700 p-5 font-bold text-lg">
          <Link legacyBehavior href="#contatos">
            <a className="hover:text-gray-700 font-bold text-lg text-white">
              CONTATO
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
