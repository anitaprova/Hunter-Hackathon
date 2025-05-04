"use client";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
// @ts-ignore
import { auth } from "../firebase";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const resetEmail = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl ml-[30%] mr-[30%] mt-[5%] mb-[10%] shadow-dark">
      <h2 className="font-bold text-3xl text-hotpink mb-5">Forget Password</h2>
      <form onSubmit={resetEmail} className="flex flex-col space-y-5 w-fit">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded-sm bg-lightpink rounded-md"
        />
        <button
          type="submit"
					onClick={() => alert("Link sent! Go to your email and change your password")}
          className="w-fit bg-hotpink text-white p-2 rounded-md w-fit cursor-pointer pl-5 pr-5"
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
