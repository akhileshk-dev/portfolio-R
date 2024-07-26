import React from 'react';
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer>
      <div className=" my__footer">
        <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
       <li> <a href="#experiance">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
<a href="https://www.instagram.com/ak__hi__le__sh__?igsh=MWkxMGgzYzA4a2l0OQ"><FaInstagramSquare className='footer__icon'/></a>
<a href="#"><FaSquareFacebook className='footer__icon'/></a>
<a href="https://x.com/Akhilesh_k_d?t=N53_Lsa2FjAbptNBzRgF7g&s=08"><FaXTwitter className='footer__icon'/></a>
        </div>
    
      </div>
    </footer>
  )
}

export default Footer