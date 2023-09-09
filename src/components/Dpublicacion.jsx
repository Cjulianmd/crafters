import PostCard from "./PostCard";

const dummyContent =
  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ";

const Detailspage = () => {

    return(
    <>
     <PostCard img content={dummyContent} />
    <section className="flex justify-center items-center gap-10 bg-white rounded-md py-3">
      <img
        className="rounded-full w-24 ml-5"
        src="https://randomuser.me/api/portraits/men/62.jpg"
        alt="Profile pic"
      />
      <div className="mr-10">
        <p className="text-lg font-bold">Pepito Perez</p>
        <p className="text-lg font-bold text-blue-600">Estudiante</p>
        <text className="mb-2">hola soy pepito peres y te voy a pedir un favor no vuelvas a publicar eso por que me ofendo y la viana y aja y no joda</text>
      </div>
    </section>

    </>
    );


};

export default Detailspage;