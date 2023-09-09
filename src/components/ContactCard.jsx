export default function ContactCard() {
  return (
    <section className="flex justify-center items-center gap-10 bg-white rounded-md py-3">
      <img
        className="rounded-full w-16 ml-5"
        src="https://randomuser.me/api/portraits/men/62.jpg"
        alt="Profile pic"
      />
      <div className="mr-10">
        <p className="font-bold text-sm">Pepito Perez</p>
        <p className="mb-2 text-sm">Estudiante</p>
        <button className="bg-slate-700 hover:bg-slate-600 text-sm p-2 text-white rounded-xl">
          + Agregar
        </button>
      </div>
    </section>
  );
}
