"use client";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// @ts-ignore
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { currentUser } = getAuth();
    console.log(currentUser);
    try {
      if (currentUser && currentUser.emailVerified) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate(`/`);
      } else {
        console.log(currentUser, "Not verified");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl ml-[30%] mr-[30%] mt-[5%] mb-[10%] shadow-dark">
      <h2 className="font-bold text-3xl text-hotpink mb-5">Login</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-5 w-fit"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded-sm"
        />
        <button
          type="submit"
          className="w-fit bg-hotpink text-white p-2 rounded-md w-fit cursor-pointer pl-5 pr-5"
        >
          Login
        </button>
        <p
          className="underline text-pink text-md mt-5 cursor-pointer"
          onClick={() => {
            navigate(`/forgetpassword`);
          }}
        >
          Forget Password
        </p>
      </form>
      <button
        className="underline text-pink text-md mt-5 cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        Need an account?
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
