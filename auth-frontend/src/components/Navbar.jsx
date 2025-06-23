import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default Navbar;
