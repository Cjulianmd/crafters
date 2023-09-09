import ContactCard from "../components/ContactCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Hperfil from "../components/Hperfil";
import PostCard from "../components/PostCard";

const dummyContent =
  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ";

export default function Home() {
  return (
    <main className="flex justify-between h-screen">
      <aside className="bg-slate-500 text-center min-w-[300px]">
        <Hperfil />
      </aside>
      <section className="text-center bg-amber-400 px-8">
        <PostCard img content={dummyContent} />
      </section>
      <aside className="flex flex-col gap-3 pt-5 bg-slate-500 text-center px-8 min-w-[350px]">
        <SearchBar />
        <Filter />
        <ContactCard />
      </aside>
    </main>
  );
}
