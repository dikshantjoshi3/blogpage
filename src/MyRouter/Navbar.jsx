import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-yellow-600 text-2xl font-bold">
          {/* Logo */}
          <Link to="/">MyLogo</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link className="text-yellow-600 hover:text-yellow-400" to="/Home">Home / Dashbord </Link></li>
          <li><Link className="text-yellow-600 hover:text-yellow-400" to="/CreactBlog"> Creact Blog</Link></li>
          <li><Link className="text-yellow-600 hover:text-yellow-400" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
