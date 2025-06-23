// import { useState } from 'react';
// import axios from 'axios';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/auth/signin', {
//         email,
//         password
//       }, { withCredentials: true });
//       alert('✅ Login Success');
//     } catch (error) {
//       alert('❌ Login Failed');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
//       <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }


import { useState } from "react";
//import axios from "axios";
import axios from "../lib/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/auth/signin",
        { email, password },
        { withCredentials: true }
      );
      alert("✅ Login successful");
    } catch (err) {
      alert("❌ Login failed");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Welcome Back</h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
