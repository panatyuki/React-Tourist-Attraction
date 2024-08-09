import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto flex justify-around items-center">
        <a href="#" className="text-white text-2xl font-semibold">
          Tourist Attraction
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white font-serif font-semibold hover:text-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-serif font-semibold hover:text-green-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-serif font-semibold hover:text-green-500"
            >
              Our services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-serif font-semibold hover:text-green-500"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

