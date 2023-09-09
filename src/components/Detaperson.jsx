
import ContactCard from "../components/ContactCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";


const Deperson = () => {

    return(
        <>
    <div className="flex justify-between px-8">
         <div className="p-6 object-top  bg-blue-600">
      <div className="text-center object-top px-8">
      <div className="my-4 flex px-8">
        <img
          src="https://th.bing.com/th/id/R.444398d9998cac437c346d62b19cb427?rik=zAonsdr%2bOZLXmg&pid=ImgRaw&r=0"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-top  mb-4"
        />
        <div className="my-8 px-8">
        <h1 className="text-xl font-semibold">Manuel Eduardo</h1>
        <h2 className="text-md font-semibold">Estudiante</h2>
</div>        <div className=" flex ">

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
</div>
</div>

        {/* Espacio entre elementos */}
        <div className="my-4"></div>

        {/* Habilidades */}
        <div className="my-4 flex px-8">
        <aside className="rounded-md bg-white p-4"> 
          <h3 className="text-sm font-semibold">Técnicas</h3>
          <p className="text-gray-600">Desarrollo web</p>       
          <p className="text-gray-600">Diseño gráfico</p>
          <p className="text-gray-600">Marketing digital</p>
          </aside>
               {/* Habilidades Blandas */}
               <aside className=" rounded-md bg-white p-4">
          <h3 className="text-sm font-semibold">Blandas</h3>
          <p className="text-gray-600">Comunicación</p>       
          <p className="text-gray-600">Trabajo en equipo</p>
          <p className="text-gray-600">Resolución de problemas</p>
        </aside></div>
        <div className="my-4"></div>

    </div>        
      </div>

 
      <aside className="flex flex-col gap-3 pt-5 bg-slate-500 text-center px-8 ">
        <SearchBar />
        <Filter />
        <ContactCard />
      </aside>


    </div></>
    );


};

export default Deperson