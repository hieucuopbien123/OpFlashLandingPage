import React from "react";
import tele from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[240px] px-md-smaller flex-col-md pt-80 pt-smaller">
        <div>
          <div className="flex gap-8 flex-wrap">
            <div className="hover:text-[#F3BF42] cursor-pointer ease-linear duration-100">
              Ecosystem
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
          </div>
          <div className="mt-5 flex-md">
            <div>
              Media inquires for Uniswap Labs -{" "}
              <span className="text-[#F3BF42]">contact@opflash.finance</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-md">
          <a
            href="https://t.me/opflashchat"
            target="_blank"
            className="w-[26px] hover:scale-[1.5]"
          >
            <img src={tele} width={"19px"}></img>
          </a>
          <a
            href="https://x.com/OpFlash_BNB/"
            target="_blank"
            className="z-10 hover:scale-[1.5]"
          >
            <img src={twitter} width={"19px"}></img>
          </a>
          <a href="#" target="_blank" className="hover:scale-[1.5]">
            <img src={discord} width={"19px"}></img>
          </a>
        </div>
      </div>
      <div className="flex pb-16"></div>
    </>
  );
};

export default Footer;
