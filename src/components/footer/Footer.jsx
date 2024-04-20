import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2024. All rights reserved.{" "}
          <a
            href="https://www.nitj.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Visit our website
          </a>
        </p>
      </div>
    </footer>
  );
};
