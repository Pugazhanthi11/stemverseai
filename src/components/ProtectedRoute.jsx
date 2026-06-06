import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  if (!token) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="bg-zinc-900 p-10 rounded-2xl text-center max-w-md w-full">

          <h1 className="text-4xl font-bold text-red-400 mb-4">
            Login Required
          </h1>

          <p className="text-zinc-400 mb-8">
            Please login or create an account to access this feature.
          </p>

          <div className="
flex
flex-col
sm:flex-row
gap-4
justify-center
items-center
w-full
">

            <button
              onClick={() => navigate("/login")}
              className="
bg-cyan-500
w-full
sm:w-auto
px-6
py-3
rounded-xl
"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="
bg-cyan-500
w-full
sm:w-auto
px-6
py-3
rounded-xl
"
            >
              Sign Up
            </button>

            <button
              onClick={() => navigate("/")}
              className="
bg-cyan-500
w-full
sm:w-auto
px-6
py-3
rounded-xl
"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    );
  }

  return children;
}

export default ProtectedRoute;