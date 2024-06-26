// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-8 max-w-lg m-auto">
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign up</h1>
      <form className="flex flex-col gap-7">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3  rounded-lg hover:opacity-95 disabled:opacity-80">
          SIGN UP
        </button>
      </form>

      <div className=" flex gap-2 mt-5">
        <p>Have an acount? </p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
