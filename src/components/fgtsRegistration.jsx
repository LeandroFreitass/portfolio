/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import PhoneMask from "./PhoneMask";
import Head from "next/head";
import { useRouter } from "next/router";
import Doubts from "./Doubts";

const FgtsRegistration = () => {
  return (
    <>
      <div>
        <Doubts title="CASO QUEIRA OUTRA FORMA DE CONTATO UTILIZE FORMULARIO ABAIXO" />
      </div>
      <section
        id="formulario"
        className="bg-gray-50 min-h-screen flex items-center justify-center"
      >
        <Head>
          <title>portifolio</title>
          <meta
            name="description"
            content="portifolio"
          />
          <meta name="theme-color" />
          <link rel="icon" href="/simbolou.jpeg" />
        </Head>
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <form
              className="mt-6"
              action="https://formsubmit.co/c98e2cbf49b4bd036b3051b9f1bb3576"
              method="POST"
            >
              <div className="mb-2">
                   <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />  
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="individualRegistration"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Whatsapp
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Mais duvidas
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src="/duvidas_frequentes.webp" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FgtsRegistration;
