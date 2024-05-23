import React, { useState } from "react";
import Link from "../Link";
import Logo from "./images/icon.png";
import Hamburgerbar from"./images/hamburgerbar.png"

// import "./styles/AppBar.scss";

const AppBar = ({setTab,current}) => {
const[show,setShow]=useState(false)
const tabs = ['Profile','Skills/Tools','Projects','Experience']



  return (
    <div className={`bg-[#2b3035] 

${show == false ? 'h-[80px]':'h-[250px]'}
laptop:h-[70px]
    `}>
      <nav
        className={`flex flex-col
        ${show == false ? 'h-[100%]':'h-[0px]'}
        laptop:flex-row
  `}
      >
        <div className="flex justify-center items-center relative
        max-tablet:border-b-[1.5px] border-[#2b3035]
        laptop:justify-normal laptop:absolute
        ">

        <img src={Logo} className="w-[70px] h-[70px] " width={10} alt="Logo" />
        <button className="absolute right-0 
         hidden   mobile:block tablet:hidden
        "
        onClick={(e)=>{show == false ? setShow(true):setShow(false)}}
        >
        <img src={Hamburgerbar} className="w-[70px] h-[70px]  hidden mobile:block tablet:hidden" width={10} alt="HamburgerBar" />
        </button>
        </div>

    <div className={`w-[100%] flex flex-col justify-center items-center p-1
      ${show ? '' : 'hidden'}
      tablet:flex-row tablet:justify-center tablet:items-center tablet:h-[70px]`}>
          {tabs.map((item, index) => (
            <button className={` h-[40px]   w-[100px]
             ${current == item ? 'text-[#ffff3f] ' :'text-[white]'
             }
            `}
             onClick={(e)=>{setTab(item)}}
            key={index}>
              {item}
            </button>
          ))}
      </div>

    <div className={` 
    w-[100%] laptop:flex flex-row justify-center items-center p-1
    tabletL:flex 
    mobile:hidden 
    `}>
          {tabs.map((item, index) => (
            <button className={` h-[40px]   w-[100px]
             ${current == item ? 'text-[#ffff3f] ' :'text-[white]'
             }
            `}
             onClick={(e)=>{setTab(item)}}
            key={index}>
              {item}
            </button>
          ))}
      </div>
      </nav>
    </div>
  );
};

export default AppBar;
