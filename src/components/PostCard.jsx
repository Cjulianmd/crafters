/* eslint-disable react/prop-types */
export default function PostCard({ img, content }) {
  return (
    <section className="flex flex-col gap-3 bg-white p-5 mt-10 rounded-xl">
      <div className="flex">
        <img
          className="rounded-full w-14 h-14 ml-5"
          src="https://randomuser.me/api/portraits/men/62.jpg"
          alt="Profile pic"
        />
        <div className="flex flex-col text-center justify-center ml-5">
          <p>Pepito Perez</p>
          <p>Estudiante</p>
        </div>
      </div>
      <p className="text-left">{content}</p>
      {img && (
        <img
          src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
          className="object-contain"
        />
      )}
      <hr />
      <button className="bg-slate-700 hover:bg-slate-600 p-2 text-white rounded-xl">
        Comentar
      </button>
    </section>
  );
}
