import { FaYoutube } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <FaYoutube className="w-16 h-16 m-auto" />
    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Inicia sesión para continuar</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label className="block text-sm font-medium leading-6 text-balance">Email</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-black">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-gray-800 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Iniciar Sesión</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-400">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-red-500 hover:text-red-400">Start a 7 days free trial</a>
    </p>
  </div>
</div>
  );
};

export default LoginForm;
