import React from "react";
import "./Header.css";
import igc from "../../assets/igc.png";
export const Header = () => {
  return (
    <header className="App-header">
      <div>
        <div>
          <h3>INDIAN GEOTECHNICAL CONFERENCE 2025 </h3>
          <img src={igc} alt="" />
        </div>
        <p>Geotechnical Engineering for a Sustainable Tomorrow (IGEST 2025)</p>
        <p>
          Dec. 19-21, Dec 2025 | Department of Civil Engineering, NIT, Jalandhar
          (Punjab) - India
        </p>
      </div>
      {/* <img src={header} alt="" /> */}
    </header>
  );
};
