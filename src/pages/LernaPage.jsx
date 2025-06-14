// src/pages/DanoninoPage.jsx

import React from 'react';

const LernaPage = () => {
  return (
    <iframe
      src="../public/lerna/index.html" // Vite sirve el contenido de 'public' desde la raíz /
      title="Proyecto Lerna"
      style={{
        width: '100%',
        height: '100vh', // Ocupa toda la altura de la ventana
        border: 'none',   // Sin bordes feos
        position: 'absolute', // Opcional, para asegurar que cubra todo
        top: 0,
        left: 0
      }}
    />
  );
};

export default LernaPage;