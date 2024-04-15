import React from 'react'
import "./Brocher.css"
import conferenceImage from "../../assets/conferenceImage.png";

import { CountdownTimer } from '../../assets/CountdownTimer'
export const Brocher = () => {
  return (
    <div className="Header" style={{ backgroundImage: `url(${conferenceImage})` }}>
        <div className="">
          <h1 className="in-header">INDIAN GEOTECHNICAL CONFERENCE 2025 </h1>
          <button>REGISTRATION</button>
          <button>BROCHURE</button>

        </div>
        <CountdownTimer className="timer"/>
      </div>
  )
}
