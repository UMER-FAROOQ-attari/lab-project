import React from 'react'
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer bg-black text-white p-10 flex flex-col items-center gap-10">
      <div className="flex gap-10">
        <FaFacebook />
        <FaSquareInstagram />
        <FaTwitterSquare />
        <BiSolidContact />
        <FaYoutube />
      </div>

      <div className="flex gap-7">
        <li className='text-2xl list-none'>Product</li>
        <li className='text-2xl list-none'>Customers</li>
        <li className='text-2xl list-none'>Pricing</li>
        <li className='text-2xl list-none'>For Agencies</li>
        <li className='text-2xl list-none'>For PPC</li>
        <li className='text-2xl list-none'>Learn</li>
      </div>

      <p>Copyright © 2025 All rights reserved - UMER</p>
    </div>
  )
}

export default Footer
