import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const HeaderNav = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú hamburguesa
  const [isLargeNavVisible, setLargeNavVisible] = useState(
    window.innerWidth >= 1280
  ); // Estado del menú grande

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      onMenuToggle(newState); // Llama a la prop aquí
      return newState;
    });
  };

  const navItems = [
    { name: "Inicio", to: "/Inicio" },
    { name: "Portafolio", to: "/Portafolio" },
    { name: "Servicio", to: "/Servicio" },
    { name: "Curriculum", to: "/Curriculum" },
    { name: "Contacto", to: "/Contacto" },
  ];

  // Manejar estado cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setLargeNavVisible(true);
        setIsOpen(false);
        onMenuToggle(false);
        // Cierra el menú hamburguesa si se vuelve a escritorio
      } else {
        setLargeNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Manejar scroll cuando el menú hamburguesa está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const logo = (
    <motion.div
      className=" p-2  flex flex-row gap-3 text-left pr-2 pb-8"
      initial={{ scale: 1.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span
        className={`md:pt-16 font-bold text-4xl uppercase pt-11  xl:text-7xl xl:pt-0   [@media(min-width:889px)]:pt-8 transition-all duration-300  ${
          isOpen ? "hidden" : "text-black"
        }`}
      >
        JD
      </span>
      <h3
        className={`text-xl font-medium  [943px]:pt-10  pt-12 xl:pt-14 ${
          isOpen ? "hidden" : "text-black"
        }`}
      >
        Jorge Dev Solutions
      </h3>
    </motion.div>
  );
  return (
    <header className="header flex transition-all duration-300 w-full px-5">
      <div className="flex ">
        <div className={`${isOpen ? "hidden" : "block"} xl:block  `}>
          {logo}
        </div>

        {/* Botón Menú Hamburguesa */}
        <div className="block md:hidden pt-5 ">
          <button
            className="flex  items-center absolute top-2 right-4"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="size-8   sm:size-6" />
            ) : (
              <Menu className="size-8  sm:size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Navegación Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 h-full w-full bg-white shadow-md xl:hidden "
          >
            <div className="flex flex-col gap-24">
              <div className="flex flex-row items-center  ">{logo}</div>
              <div className="flex flex-col">
                <ul className="flex flex-col items-center gap-4 py-4">
                  {navItems.map((section) => (
                    <li key={section.name} className="w-full text-center ">
                      <NavLink
                        to={section.to}
                        className="block py-2 text-lg font-medium hover:bg-gray-100 w-full "
                        onClick={() => {
                          setIsOpen(false);
                          onMenuToggle(false);
                        }}
                      >
                        {section.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Menú Navegación Grande */}
      {isLargeNavVisible && (
        <nav className="">
          <ul className="flex gap-3 md:gap-2 sm:gap-1 ">
            {navItems.map((section, index) => (
              <motion.li
                key={section.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink to={section.to}>{section.name}</NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
