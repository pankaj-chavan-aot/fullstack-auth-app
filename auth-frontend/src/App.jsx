// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Logout from './components/Logout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Navbar from './components/Navbar'; // ✅ नविन import


function App() {
  return (
    <Router>
       <Navbar /> {}
      <Routes>
        <Route path="/" element={<Login />} /> {/* ✅ Default Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
