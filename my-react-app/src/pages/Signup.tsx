"use client";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
// @ts-ignore
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async (userCredentials) => {
        const user = userCredentials.user;
        await sendEmailVerification(user);
        alert("Go to your email and verify your account.");
      });

      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl ml-[30%] mr-[30%] mt-[5%] mb-[10%] shadow-dark">
      <h2 className="font-bold text-3xl text-hotpink mb-5">Sign Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col space-y-5 w-fit">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-lightpink rounded-md p-2 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-lightpink rounded-md p-2 rounded-sm"
        />
        <button
          type="submit"
          className="w-fit bg-hotpink text-white p-2 rounded-md w-fit cursor-pointer pl-5 pr-5"
        >
          Sign Up
        </button>
      </form>
      <button
        className="underline text-pink text-md mt-5 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Already have an account?
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
