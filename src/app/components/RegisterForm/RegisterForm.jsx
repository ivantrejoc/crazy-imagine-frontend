"use client";
import { FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form";


const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  console.log("LOS ERRORES: ", errors);
  

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const URL = "http://localhost:3001/ivan-trejo-challenge/user/";

    const postUser = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
    });

    if (postUser?.error) {
      console.log(postUser.error);
      alert(errors);
    } else {
      alert("USUARIO CREADO")
      reset();
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FaYoutube className="w-16 h-16 m-auto" />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">
          Crea un usuario para continuar
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium leading-6 text-balance">
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 p-2 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"
                {...register("name", {
                  required: true,
                  pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
                })}
              />
              {errors.name && <span>Nombre Requerido, solo acepta letras</span>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-balance">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 p-2 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                })}
              />
              {errors.email && <span>Email Requerido, formato hola@mail.com</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-black">
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 p-2 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  min: 8,
                  max: 20
                })}
              />
              {errors.password && <span>Password Requerido. Min 8, max 20, mayúsculas, minúsculas y números</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-black">
                Confirma el Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="confirmpassword"
                name="confirmPassword"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 p-2 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                {...register("confirmPassword", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  min: 8,
                  max: 20, 
                  validate: (value) =>{
                    if (value === watch("password")) {
                      return true;
                    } else{
                      return ("Passwords son diferentes");
                    }
                  },
                })}
              />
              {errors.confirmPassword && <span>Password Requerido, Passwords deben ser iguales</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
