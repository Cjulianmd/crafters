import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/logo.png";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://8dc5-200-12-183-152.ngrok-free.app/login_validation",
        {
          data: {
            email: loginData.email,
            password: loginData.password,
          },
        }
      );
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Hubo un error en la solicitud POST:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={img}
            alt="Logo EAFIT ConnectU"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="correo"
                  name="name"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    setLoginData({ ...loginData, email: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => {
                    setLoginData({ ...loginData, password: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
          <div className="mt-5">
            <Link to="/register">Registrarse</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
