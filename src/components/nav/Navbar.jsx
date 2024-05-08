import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="flex flex-wrap justify-center lg:justify-between lg:mx-10 text-xs mb-6 my-5 text-gray-500 space-x-2">
      <li className="font-bold hover:text-orange-300">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/about-us">About Us</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/speakers">Speakers</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/places-to-visit">Conference Program</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/templates">Templates</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/sponsors">Sponsors</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/exhibitors">Exhibitors</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/venue">Venue</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/workshop">Workshop</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/accomodation">Accomodation</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/places-to-visit">Places to Visit</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/contacts">Contacts</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/registration">Registration</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
