
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await axios.post(
      "http://localhost:3000/auth/signup",
      {
        email,
        password,
        roleId: 3, // 👈 default 'user'
      },
      { withCredentials: true }
    );
    alert("✅ Signup successful");
  } catch (err) {
    console.error(err.response?.data); // 👉 backend error details
    alert("❌ Signup failed: " + err.response?.data?.message);
  }
};

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
      <form onSubmit={handleSignup} className="space-y-5">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
