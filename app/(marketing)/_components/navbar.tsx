import React from "react";

export default function Navbar() {
  return (
    <header className="fixed flex items-center top-0 w-full h-14 bg-white px-4 border-b shadow-sm">
      <nav className="flex justify-evenly w-full">
        <h1 className="">Logo Goes Here</h1>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Features</li>
          <li>Plans</li>
          <li>login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}
