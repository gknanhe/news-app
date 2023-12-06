import React, { useState } from "react";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { app } from "../firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import state, { signin } from "../store";
import { toast } from "react-toastify";
import { useSnapshot } from "valtio";

const auth = getAuth();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const snap = useSnapshot(state);
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    if (response) {
      toast.success("User Signed in successfuly", {
        autoClose: 5000,
        theme: "dark",
      });
      state.loggedUser = response.user;
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      navigate("/");
    } else {
      toast.error("No user found", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      state.loggedUser = null;

      return;
    }

    setEmail("");
    setPassword("");

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((value) => console.log("login success", value))
    //   .then((value) => navigate("/"))
    //   .catch((err) => console.log(err));

    // setError(true);
    // if (!email) {
    //   setError("Please fill the email");
    //   return;
    // }
    // if (!password) {
    //   setError("Please fill the password");
    //   return;
    // }
  };

  return (
    // <Box
    //   w="40%"
    //   border="1px"
    //   borderColor="gray.400"
    //   m="auto"
    //   p="10"
    //   borderRadius="2xl"
    // >
    //   <Heading size="md" mb="10">
    //     Login{" "}
    //   </Heading>
    //   <Input
    //     value={email}
    //     onChange={(e) => setEmai(e.target.value)}
    //     type="email"
    //     required
    //     placeholder="Email"
    //     mb="5"
    //   />
    //   <Input
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     type="password"
    //     placeholder="Password"
    //     mb="5"
    //   />
    //   {error && <Text>{error}</Text>}
    //   <Button colorScheme="blue" w="60%" onClick={handleLogin}>
    //     Login
    //   </Button>
    // </Box>

    <div className=" justify-center items-center">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center h-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img className="w-8 h-8 mr-2 " src={logoSvg} alt="logo" /> */}
            <span className="text-gradient_blue-purple">Todo List</span>
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
