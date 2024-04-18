// ContactInfo.js
import React from 'react'

export const Address = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-blue-50">
      <h3 className="text-2xl font-bold text-center mb-4">Conference Secretariat</h3>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mr-4 md:mr-8">
          <p className="text-lg font-medium mb-1">Dr Arvind K Agnihotri</p>
          <p className="text-gray-600">Professor NIT (Organizing Secretary IGC-25)</p>
        </div>
        <div className="">
          <p className="text-lg font-medium mb-1">+91-0181-5037855, 2690301, 2690453, 3082000</p>
          {/* <p className="text-gray-600"></p> */}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg font-medium">Indian Geotechnical Society, NITJ Chapter</p>
        <p className="text-gray-600">and Civil Engineering Department, Dr B R Ambedkar National Institute of Technology, Jalandhar - 144011 (PB) India</p>
      </div>
    </section>
  )
}