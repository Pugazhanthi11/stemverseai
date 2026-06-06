import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Login() {

  const [showPassword, setShowPassword] =
useState(false);

  const navigate = useNavigate();


  const [email, setEmail] =
  useState("");

  const [password, setPassword] =
  useState("");

  const [message, setMessage] =
  useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
      await fetch(
        "https://stemverseai1.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
            "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
      await response.json();

      if (!data.success) {
        setMessage(data.message);
        return;
      }

      localStorage.setItem(
  "token",
  data.token
);

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);

window.location.href = "/dashboard";

localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);

setMessage("Login Successful!");

setTimeout(() => {
  navigate("/dashboard");
}, 1000);

    } catch (error) {

      setMessage(
        "Server Error"
      );

    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleLogin}
        className="
bg-zinc-900
p-6 sm:p-8
rounded-2xl
w-[90%]
max-w-md
mx-auto
"
      >

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <div className="relative mb-4">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Password"
    className="
      w-full
      p-3
      rounded-lg
      bg-zinc-800
    "
    value={password}
    onChange={(e)=>
      setPassword(e.target.value)
    }
  />

  <button
    type="button"
    className="
      absolute
      right-4
      top-3
      text-zinc-400
    "
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
  >
    {
      showPassword
        ? <EyeOff size={20}/>
        : <Eye size={20}/>
    }
  </button>

</div>

        {message && (
          <p
  className={`mb-4 ${
    message === "Login Successful!"
      ? "text-green-400"
      : "text-red-400"
  }`}
>
  {message}
</p>
        )}

        <button
          className="w-full bg-cyan-500 p-3 rounded-lg font-bold"
        >
          Login
        </button>

        <p className="mt-4 text-zinc-400">
          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2"
          >
            Sign Up
          </Link>

        </p>

        <p className="mt-3 text-center">

  <button
    type="button"
    onClick={() =>
      navigate("/forgot-password")
    }
    className="
      text-cyan-400
      hover:underline
    "
  >
    Forgot Password?
  </button>

</p>

      </form>

    </div>
  );
}

export default Login;
