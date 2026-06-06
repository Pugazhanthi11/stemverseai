import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://stemverseai1.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      setMessage(data.message);

    } catch {

      setMessage("Server Error");

    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Registered Email"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        {message && (
          <p className="mb-4 text-green-400">
            {message}
          </p>
        )}

        <button
          className="w-full bg-cyan-500 p-3 rounded-lg font-bold"
        >
          Send Reset Link
        </button>

      </form>

    </div>
  );
}

export default ForgotPassword;
