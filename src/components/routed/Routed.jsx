import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Venue from "../venue/Venue";


export const Routed = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
          <Route path="/venue" element={<Venue />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}
