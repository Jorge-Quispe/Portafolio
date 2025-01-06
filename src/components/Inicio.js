import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className=" pt-12 py-11 mx-auto px-5 ">
      <motion.div
        initial={{ opacity: 0, x: -20 }} // Comienza invisible y desplazado a la izquierda
        animate={{ opacity: 1, x: 0 }} // Termina visible y en su posición original
        transition={{ duration: 0.5 }} // Duración de la animación
        className="flex-col pt-4 text-center"
      >
        <h1 className="font-bold sm:text-4xl uppercase text-2xl ">
          Jorge Luis Quispe Sumire
        </h1>
        <h2 className="sm:text-2xl text-xs pt-2">Frontend Developer Junior</h2>
        <div className="flex flex-row justify-center gap-8 pt-2">
          <a
            href="https://www.linkedin.com/in/jorge-luis-quispe-sumire-7b9b80270

"
          >
            <img src="/images/174857.png" className="size-6" alt=""></img>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=932346671

"
          >
            <img
              src="/images/pngimg.com - whatsapp_PNG21.png"
              className="size-6"
              alt=""
            ></img>
          </a>
          <a
            href="https://github.com/Jorge-Quispe

"
          >
            <img src="/images/25231.png" className="size-6" alt=""></img>
          </a>
        </div>
      </motion.div>

      <section className=" flex   pt-14 text-lg  ">
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Comienza invisible y desplazado a la izquierda
          animate={{ opacity: 1, x: 0 }} // Termina visible y en su posición original
          transition={{ duration: 0.3 }} // Duración de la animación
          className="flex pt-4 flex-col  sm:flex-row  gap-5 "
        >
          <p className="  sm:w-1/2 ">
            {" "}
            Bachiller en Ingeniería de Sistemas, apasionado por el desarrollo
            frontend y la gestión de procesos. Trabajo con tecnologías como
            Next.js, TypeScript, Tailwind CSS y shadcn , siempre buscando
            mejorar la experiencia de usuario y hacer que cada proyecto sea
            único. Me motiva enfrentar nuevos desafíos y encontrar soluciones
            creativas que hagan las cosas más fáciles y agradables para quienes
            las usan.{" "}
          </p>

          <div className="flex justify-center w-1/2 ">
            <h2 className=" ">Tecnologias</h2>
            <div></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
