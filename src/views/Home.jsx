import ContactCard from "../components/ContactCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <main className="flex justify-between h-screen">
      <aside className="bg-slate-500 text-center">Left</aside>
      <section className="grow text-center bg-amber-400">Center</section>
      <aside className="flex flex-col gap-3 pt-5 bg-slate-500 text-center px-8">
        <SearchBar />
        <Filter />
        <ContactCard />
      </aside>
    </main>
  );
}
