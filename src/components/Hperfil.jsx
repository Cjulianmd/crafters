

const Sidebar = () => {
  return (
    <div className="p-6 object-top h-32 ">
      <div className="text-center object-top h-32 ">
        <img
          src="https://th.bing.com/th/id/R.444398d9998cac437c346d62b19cb427?rik=zAonsdr%2bOZLXmg&pid=ImgRaw&r=0"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-top mx-auto mb-4"
        />
        <h1 className="text-xl font-semibold">Manuel Eduardo</h1>
        <h2 className="text-md font-semibold">Estudiante</h2>
        {/*hobiies*/}
        <aside className="rounded-md bg-white"> 
        <h3 className="text-s font-semibold">Hobbies</h3>
        <p className="text-gray-600">Leer</p>       
        <p className="text-gray-600">Correr</p>
        <p className="text-gray-600">Jugar videojuegos</p>
        </aside>
        <aside className="rounded-md bg-white"> 
        <h3 className="text-s font-semibold">Intereses</h3>
        <p className="text-gray-600">Ingeniería</p>       
        <p className="text-gray-600">Programación</p>
        <p className="text-gray-600">Baile</p>
        </aside>

        {/* Agrega más detalles del perfil aquí */}
      </div>
    </div>
  );
};

export default Sidebar;


