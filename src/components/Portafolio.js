import React from "react";

export const Portafolio = () => {
  return (
    <div className="bg-gray-50 p-6">
      <div className=" grid grid-cols-1 sm:grid-cols-2 ">
        <div class="relative group   bg-white rounded-lg shadow-lg overflow-hidden w-full">
          <img
            src="/images/logo fyona.png"
            alt="Imagen principal"
            class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          <img
            src="/images/Fyhona.png"
            alt="Imagen secundaria"
            class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-sm font-medium">Texto descriptivo</p>
          </div>
        </div>

        <div>de</div>
      </div>
    </div>
  );
};
