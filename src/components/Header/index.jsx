import React, { useEffect, useRef, useState } from "react";
import closebutton from "../../assets/close-button.svg";
import logo from "../../assets/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 z-40 w-full bg-[#060606]">
        <div className="flex px-[108px] justify-between items-center border-bgray py-[24px] py-md-smaller px-md-smaller sticky">
          <div>
            <img src={logo} className="header-logo cursor-pointer"></img>
          </div>
          <div className="flex gap-[30px] 2xl:gap-[60px] items-center font-bold hidden-md">
            <a
              href="#ecosystem"
              className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100"
            >
              Ecosytem
            </a>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Community
            </div>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Governance
            </div>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Developers
            </div>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Blog
            </div>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              FAQ
            </div>
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Jobs
            </div>
          </div>
          <div className="launch-button cursor-pointer hidden-md hover:text-white hover:border-white">
            <a href="https://app.opflash.finance/swap">Launch App</a>
          </div>
          <div className="hidden show-md">
            <button
              className="block opacity-80 hover:bg-sky-700 ease-linear duration-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CgMenuRightAlt size={"30px"} fontWeight="light" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="p-5 fixed top-0 left-0 right-0 z-30 h-full w-full transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "#000201",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
              backgroundSize: "contain",
            }}
          >
            {/* <div className="relative">
              <div className="flex justify-between items-center absolute w-full z-40">
                <img src={logo} />
                <button onClick={() => setIsOpen(false)}>
                  <img src={closebutton} />
                </button>
              </div>
            </div> */}
            <div className="relative flex gap-4 w-full items-center flex-col h-full pt-[100px]">
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Ecosytem
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Community
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Governance
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Developers
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Blog
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                FAQ
              </div>
              <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
                Jobs
              </div>
              <div className="launch-button cursor-pointer">
                <a href="https://app.opflash.finance/swap">Launch App</a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
