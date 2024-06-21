"user client";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  
    return (
      <form action={authenticate} className="flex flex-col items-center gap-4 h-fit ">
        <input className="rounded-md border text-sm p-2" type="text" placeholder="login" name="login" />
        <input className="rounded-md border text-sm p-2" type="password" placeholder="password" name="password" />
        <button className="cursor-pointer text-sm rounded-md border text-white hover:bg-indigo-300 pt-2 pb-2 pl-4 pr-4">Login</button>
      </form>
    );
  };
  
  export default LoginForm;