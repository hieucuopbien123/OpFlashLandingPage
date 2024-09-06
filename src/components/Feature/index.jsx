import React from "react";
import arrow from "../../assets/arrow.svg";
import feature from "../../assets/feature.gif";
import about from "../../assets/about.gif";
import upArrow from "../../assets/upArrow.png";
import rocket from "../../assets/rocket.gif";
import upArrow2 from "../../assets/upArrow.png";
import blur from "../../assets/blur.png";
const Feature = () => {
  return (
    <div
      id="ecosystem"
      className="pt-[200px] px-[240px] font-medium px-md-smaller py-md-smaller2"
    >
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-[165px] w-full flex-col-md justify-center"
          // data-aos="fade-left"
          // data-aos-duration="2000"
          // data-aos-once="true"
        >
          <div className="w-full-md flex center-xl">
            <div
              className="flex flex-col max-w-[400px] no-w-limit"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div className="flex gap-4">
                <div className="text-[#F3BF42] text-[32px]">
                  OpFlash Ecosystem
                </div>
                <img src={arrow}></img>
              </div>
              <div className="text-[24px] pt-3">
                Multiverse of Opportunities
              </div>
              <div className="pt-3">
                OpFlash opens the gateway to a diverse array of blockchains,
                tokens, and AMMs{" "}
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={feature} width={"370px"}></img>
            <img
              className="absolute top-16 right-[-200px] hidden-md"
              src={blur}
              width={"542px"}
            ></img>
          </div>
        </div>
      </div>
      <div id="docs" className="w-full pt-[175px] overflow-hidden">
        <div
          className="flex gap-[165px] flex-colr-md justify-center"
          // data-aos="fade-right"
          // data-aos-duration="2000"
          // data-aos-once="true"
        >
          <div className="w-full-md relative flex center-xl ">
            <img
              className="absolute left-[-257px] top-[-147px] hidden-md"
              src={blur}
              width={"542px"}
            ></img>
            <img style={{ objectFit: "contain", zIndex: 1 }} src={about}></img>
          </div>
          <div>
            <div
              className="flex flex-col max-w-[400px] no-w-limit"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div className="flex gap-4">
                <div className="text-[#F3BF42] text-[32px]">About OpFlash</div>
                <img src={arrow}></img>
              </div>
              <div className="text-[24px] pt-3">
                Pioneer DEX Aggregator on opBNB
              </div>
              <div className="pt-3">
                OpFlash provides an integrated trading hub that caters to all
                your needs. Explore our approach, values, and groundbreaking
                technology
              </div>
              <a
                href="https://docs.opflash.finance/"
                target="_blank"
                className="bg-[#433920] flex px-[20px] py-[7px] justify-between items-center rounded-md w-[217px] mt-3 cursor-pointer w-md-larger hover:bg-[#877347]"
              >
                <div className="">Documentation</div>
                <div>
                  <img src={upArrow}></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="w-full overflow-hidden">
        <div
          className="flex mt-[175px] justify-center flex-md-wrap gap-[50px] flex-col-md "
          // data-aos="fade-left"
          // data-aos-duration="2000"
          // data-aos-once="true"
        >
          <div className="relative flex items-end flex-wrap max-w-685">
            <div className="flex gap-4 absolute top-0">
              <div className="text-[#F3BF42] text-[32px]">OpFlash Features</div>
              <img src={arrow}></img>
            </div>
            <div className="absolute top-[-128px]">
              <img className="hidden-md" src={blur} width={"542px"}></img>
            </div>
            <div className="absolute z-[10] bottom-[50px] hidden-md max-w-[260px] hidden-xl">
              <div className="flex-md text-md-larger-3">
                <div className="text-2xl">Powered by </div>
                <div className="hidden show-md">&nbsp;</div>
                <div className="text-2xl">Innovation</div>
              </div>
              <div className="mt-[16px] text-sm light-height-md">
                OpFlash empowers you with advanced tools at your fingertips,
                elevating your trading experience and emboldening your financial
                journey.{" "}
              </div>
            </div>
            <img
              className="pt-[40px] max-w-[700px] max-h-[700px] max-width-smaller fullWidth-underxl"
              src={rocket}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            ></img>
          </div>
          <div
            className="flex flex-col justify-end gap-4 w-full-md max-w-[580px]"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a
              href="https://app.opflash.finance/swap"
              target="_blank"
              className="bg-[#433920] px-6 pt-2 pb-4 rounded-lg w-full max-w-[580px] hover:bg-[#877347]"
            >
              <div className="flex gap-3 items-center">
                <div className="text-[24px]">DEX Aggregation</div>
                <div>
                  <img src={upArrow2} width={"14px"}></img>
                </div>
              </div>
              <div className="mt-2 text-sm light-height-md">
                Access multiple exchanges for optimal pricing and minimal
                slippage.
              </div>
            </a>
            <div className="bg-[#433920] px-6 pt-2 pb-4 rounded-lg w-full max-w-[580px] hover:bg-[#877347]">
              <div className="flex gap-3 items-center">
                <div className="text-[24px]">Cross-Chain Swap</div>
                <div>
                  <img src={upArrow2} width={"14px"}></img>
                </div>
              </div>
              <div className="mt-2 text-sm light-height-md">
                Break blockchain barriers and trade tokens seamlessly across
                different chains.
              </div>
            </div>
            <div className="bg-[#433920] px-6 pt-2 pb-4 rounded-lg w-full max-w-[580px] hover:bg-[#877347]">
              <div className="flex gap-3 items-center">
                <div className="text-[24px]">Limit Orders</div>
                <div>
                  <img src={upArrow2} width={"14px"}></img>
                </div>
              </div>
              <div className="mt-2 text-sm light-height-md">
                Set precise prices for automated trades, giving you control and
                efficiency.
              </div>
            </div>
            <div className="bg-[#433920] px-6 pt-2 pb-4 rounded-lg w-full max-w-[580px] hover:bg-[#877347]">
              <div className="flex gap-3 items-center">
                <div className="text-[24px]">Farm & Vaults</div>
                <div>
                  <img src={upArrow2} width={"14px"}></img>
                </div>
              </div>
              <div className="mt-2 text-sm light-height-md">
                Turn idle holdings into profitable opportunities through
                automated strategies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
