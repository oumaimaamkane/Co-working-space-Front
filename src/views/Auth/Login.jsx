import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import authImage from "../../assets/img/auth.png";
import axios from "../../api/axios";

const LOGIN_URL = "/login";

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  if(isLoggedIn){
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      const authData = res.data;

      login({ user: authData.user, token: authData.access_token });
      navigate(authData.user.role_id === 1 ? "/Admin/dashboard" : "/");
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else if (error.response.status === 401) {
          setErrors({ password: error.response.data.error });
        } else {
          setErrors({});
        }
      }
    }
  };

  return (
    <div
      className="font-mono h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(to right, #D1F1FF, #16B8A6)" }}
    >
      <div className="mx-auto">
        <div className="flex items-center h-screen justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <img
                src={authImage}
                className="w-full h-full rounded-l-lg"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl 2xl:text-3xl text-center">
                Welcome Back!
              </h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 py-5 bg-white rounded"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm 2xl:text-2xl font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 2xl:py-4 2xl:px-5 text-sm 2xl:text-2xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm 2xl:text-2xl font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 2xl:py-4 2xl:px-5 text-sm 2xl:text-2xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    className="mr-2 2xl:size-5 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm 2xl:text-2xl" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 2xl:py-4 2xl:px-5 2xl:text-2xl font-bold text-white bg-[#0E2333] rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>

                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <a
                    className="inline-block text-sm 2xl:text-2xl text-[#0E2333] align-baseline hover:text-blue-800"
                    href="/register"
                  >
                    Create an Account!
                  </a>
                </div>

                <div className="text-center">
                  <a
                    className="inline-block text-sm 2xl:text-2xl text-[#0E2333] align-baseline hover:text-blue-800"
                    href="/register"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}