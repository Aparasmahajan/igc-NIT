import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="flex flex-wrap justify-center lg:justify-between lg:mx-10 text-xs mb-6 my-5 text-gray-500 space-x-2">
      <li className="font-bold hover:text-orange-300">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/organizing-committe">Organizing Committee</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/advisory-committe">Advisory Committee</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/technical-committee">Technical Committee</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/keynote-speakers">Keynote Speakers</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/theme-speakers">Theme Speakers</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/conference-theme">Conference Theme</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/detailed-schedule">Detailed Schedule</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/schedule-at-glance">Schedule At a Glance</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/technical-sessions">Technical Sessions</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/poseter-sessions">Poster Sessions</Link>
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
        <Link to="/accomondation">Accommodation</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/places-to-visit">Places To Visit</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/contacts">Contacts</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/registrations">Registrations</Link>
      </li>
      <li className="font-bold hover:text-orange-300">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
