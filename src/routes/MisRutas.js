import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navlink,
  Navigate,
} from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Servicios } from "../components/Servicios";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MisRutas = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };
  return (
    <BrowserRouter>
      {/*  HEADER Y NAVEGACION */}
      <div className="w-full"></div>
      <HeaderNav onMenuToggle={handleMenuToggle} />
      <div className="border-b-2 flex w-full"></div>
      {/* CONTENIDO CENTRAL */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicio" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer></Footer>
    </BrowserRouter>
  );
};
