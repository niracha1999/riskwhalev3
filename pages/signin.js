import { MainMenu } from "../components/MainMenu";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import axios from "axios";

const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);

  let history = useHistory();

  const dataK = {
    email: email,
    password: password,
  };

  const authen = async () => {
    const data = await fetch("http://localhost:1000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataK),
    });

    console.log(data);
    // if (data.status === 200) {
    //   console.log("login successful");
    // } else {
    //   console.log("error Klod");
    // }
  };

  return (
    <div>
      <MainMenu />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="./assets/main_label.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-blue-600">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={email}
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                onClick={authen}
                className="group h-full relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>

          <div>
            <label className="relative flex justify-center font-medium text-blue-600 mt-16 text-lg">
              Don’t have account? Register for free!
            </label>
            <button className=" px-4 py-3 mt-10 h-full relative w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-lightblue-700 hover:bg-lightblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue-600">
              <a href="/signup_individual">Sign up as an individual</a>
            </button>
            <button className=" px-4 py-3 mt-4 h-full relative w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-lightblue-700 hover:bg-lightblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue-600">
              <a href="/signup_company">Sign up as a company</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default signin;
