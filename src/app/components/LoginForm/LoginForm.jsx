"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { FaYoutube } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const { setAuthData } = useAuth();
  const router = useRouter();

  console.log("LOS ERRORES: ", errors);
  // const onSubmit = (data) => console.log(data);


  //login
  const onSubmit = async (data, event) => {
    event.preventDefault();

    const { email, password } = data;
    const URL = `http://localhost:3001/ivan-trejo-challenge/user/login/?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch(URL);

      const responseData = await response.json();
      console.log("LA RESPUESTA DEL SERVER: ", responseData);

      if (responseData.access === true) {
        setAuthData(responseData);
        router.push("/history");
      } else {
        alert("Acceso denegado");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FaYoutube className="w-16 h-16 m-auto" />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">
          Inicia sesión para continuar
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium leading-6 text-balance">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                })}
              />
              {errors.email && <span>Email incorrecto</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-black">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-gray-800 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  min: 8,
                  max: 20
                })}
              />
              {errors.password && (
                <span>
                  Password Requerido. Min 8, max 20, mayúsculas, minúsculas y
                  números
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          No eres miembro?
          <a
            href="/register"
            className="ml-2 font-semibold leading-6 text-red-500 hover:text-red-400"
          >
            Crea una Cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
