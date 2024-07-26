import React, { useState } from 'react';
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
const Nav = () => {
  const [activeNav,setActiveNav]=useState("");
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav("#")}} className={activeNav==="#"?"active":""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveNav("#about")}} className={activeNav==="#about"?"active":""}><IoPersonOutline/></a>
      <a href="#experience" onClick={()=>{setActiveNav("#experience")}} className={activeNav==="#experience"?"active":""}><RiComputerLine/></a>
      <a href="#portfolio" onClick={()=>{setActiveNav("#portfolio")}} className={activeNav==='#portfolio'?'active':""}><BsCollection/></a>
      <a href="#contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav==='#contact'?'active':""}><FaRegMessage/></a>
    </nav>
  )
}

export default Nav