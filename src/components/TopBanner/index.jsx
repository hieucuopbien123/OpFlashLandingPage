import React from "react";
import "aos/dist/aos.css";
import banner from "../../assets/banner.mp4";
import layer from "../../assets/layer.svg";
import tele from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import about from "../../assets/about.gif";
import bannerLoadind from "../../assets/bannerloading.png";
const TopBanner = () => {
  return (
    <>
      <div className="pt-[66px]"></div>
      <div className="w-full">
        <div className="w-full relative">
          {/* Best practice cho video với placeholder ảnh */}
          <video
            loop
            muted
            autoPlay
            className="z-10 max-h-[70vh] w-[100vw] min-h-[400px]"
            style={{
              backgroundImage: `url(${bannerLoadind})`,
              objectFit: "fill",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <source
              src={
                banner
              }
              type="video/mp4"
            />
          </video>
          <div
            className="absolute top-[40%] flex flex-col justify-center items-center w-full"
            style={{
              transform: "translateY(-50%)",
            }}
          >
            <div className="flex flex-wrap text-[64px] justify-center items-center font-medium z-20">
              <div>
                Op<span className="text-[#F3BF42]">Flash</span>
              </div>
              <div style={{ lineHeight: "62px" }}>&nbsp;Protocol</div>
            </div>
            <div className="text-[rgba(255, 255, 255, 0.70)] z-10">
              <div className=" text-center">
                Your All-in-One Solution for Decentralized Trading
              </div>
            </div>
            <div className="mt-[30px]">
              <div className="flex gap-4">
                <a
                  href="https://t.me/opflashchat"
                  target="_blank"
                  className="w-[26px]"
                >
                  <div>
                    <img
                      className="hover:scale-[1.5]"
                      src={tele}
                      width={"26px"}
                    ></img>
                  </div>
                </a>
                <a
                  href="https://x.com/OpFlash_BNB/"
                  target="_blank"
                  className=" z-10"
                >
                  <img
                    className="hover:scale-[1.5]"
                    src={twitter}
                    width={"26px"}
                  ></img>
                </a>
                <a href="#" target="_blank" className="hover:scale-[1.5]">
                  <img src={discord} width={"26px"}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
