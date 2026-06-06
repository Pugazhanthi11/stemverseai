import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate =
  useNavigate();

  const [name,setName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const [message,setMessage] =
  useState("");

  const handleRegister =
  async (e) => {

    e.preventDefault();

    const response =
    await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method:"POST",
        headers:{
          "Content-Type":
          "application/json",
        },
        body:JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data =
    await response.json();

    if(!data.success){
      setMessage(
        data.message
      );
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={
          handleRegister
        }
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
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={name}
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        {message && (
          <p className="text-red-400 mb-4">
            {message}
          </p>
        )}

        <button
          className="w-full bg-cyan-500 p-3 rounded-lg font-bold"
        >
          Create Account
        </button>

      </form>

    </div>
  );
}

export default Register;