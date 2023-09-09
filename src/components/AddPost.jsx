// import axios from "axios";
// import { useState } from "react";

export default function AddPost() {
  //const [postContent, setPostContent] = useState;

  //   const handleChange = (e) => {
  //     setPostContent(e.target.value);
  //   };

  //   const handleSubmit = () => {
  //     axios.post("https://8dc5-200-12-183-152.ngrok-free.app/new_post", {
  //       data: {
  //         post_data: postContent,
  //       },
  //     });
  //   };
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
      <textarea className="text-left h-20 bg-slate-100 rounded-md" />
      <hr />
      <button className="bg-slate-700 hover:bg-slate-600 p-2 text-white rounded-xl">
        Publicar
      </button>
    </section>
  );
}
