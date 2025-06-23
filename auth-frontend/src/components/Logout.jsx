// import axios from 'axios';

// export default function Logout() {
//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:3000/auth/logout', {}, { withCredentials: true });
//       alert('✅ Logged out');
//     } catch (error) {
//       alert('❌ Logout Failed');
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// }

import axios from "axios";

export default function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true });
      alert("✅ Logged out");
    } catch (err) {
      alert("❌ Logout failed");
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
}
