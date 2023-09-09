const Sidebar = () => {
  return (
    <div className="p-6 flex flex-col">
      <img
        src="https://th.bing.com/th/id/R.444398d9998cac437c346d62b19cb427?rik=zAonsdr%2bOZLXmg&pid=ImgRaw&r=0"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-xl font-semibold">Manuel Eduardo</h1>
      <h2 className="text-md font-semibold">Estudiante</h2>

      {/* Espacio entre elementos */}
      <div className="my-4"></div>

      {/* Hobbies */}
      <aside className="rounded-md bg-white p-4">
        <h3 className="text-sm font-semibold">Hobbies</h3>
        <p className="text-gray-600">Leer</p>
        <p className="text-gray-600">Correr</p>
        <p className="text-gray-600">Jugar videojuegos</p>
      </aside>

      {/* Espacio entre elementos */}
      <div className="my-4"></div>

      {/* Intereses */}
      <aside className="rounded-md bg-white p-4">
        <h3 className="text-sm font-semibold">Intereses</h3>
        <p className="text-gray-600">Ingeniería</p>
        <p className="text-gray-600">Programación</p>
        <p className="text-gray-600">Baile</p>
      </aside>

      {/* Espacio entre elementos */}
      <div className="my-4"></div>

      {/* Habilidades */}
      <aside className="rounded-md bg-white p-4">
        <h3 className="text-sm font-semibold">Habilidades Técnicas</h3>
        <p className="text-gray-600">Desarrollo web</p>
        <p className="text-gray-600">Diseño gráfico</p>
        <p className="text-gray-600">Marketing digital</p>
      </aside>

      {/* Espacio entre elementos */}
      <div className="my-4"></div>

      {/* Habilidades Blandas */}
      <aside className="rounded-md bg-white p-4">
        <h3 className="text-sm font-semibold">Habilidades Blandas</h3>
        <p className="text-gray-600">Comunicación</p>
        <p className="text-gray-600">Trabajo en equipo</p>
        <p className="text-gray-600">Resolución de problemas</p>
      </aside>

      {/* Agrega más detalles del perfil aquí */}
    </div>
  );
};

export default Sidebar;
