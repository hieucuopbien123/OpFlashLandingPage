import React from "react";
import CountUp from 'react-countup'
import "aos/dist/aos.css";
import layer from "../../assets/layer.png";
const Protocol = () => {
  return (
    <>
      <div
        className="w-full relative flex items-center justify-center py-20 padding-0-when-small"
        style={{
          overflowY: "hidden",
        }}
      >
        <img
          // Background image làm rất hoàn hảo
          className="absolute blur-when-small"
          style={{
            transform: "scale(0.99)",
          }}
          src={layer}
        ></img>
        <div className="absolute radial-bg z-10"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="flex gap-[40px] md:gap-[78px] justify-center items-center mt-[88px] z-10 relative top-[-30px] font-medium flex-wrap px-2"
        >
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <div className="text-[54px] text-md-larger-4 text-[#F3BF42]">
              {/* Dùng lib animation số react-countup */}
              <CountUp
                prefix="$"
                suffix="+"
                start={0}
                end={999}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </div>
            <div className="text-[16px] min-h-[80px]">Trade Volume</div>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <div className="text-[54px] text-md-larger-4 text-[#F3BF42]">
              <CountUp
                prefix="$"
                suffix="+"
                start={0}
                end={999}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </div>
            <div className="text-[16px] min-h-[80px]">All Time Trades</div>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <div className="text-[54px] text-md-larger-4 text-[#F3BF42]">
              <CountUp
                prefix="$"
                suffix="+"
                start={0}
                end={999}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </div>
            <div className="text-[16px] min-h-[80px]">Integrations</div>
          </div>
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <div className="text-[54px] text-md-larger-4 text-[#F3BF42]">
              <CountUp
                prefix="$"
                suffix="+"
                start={0}
                end={999}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </div>
            <div className="text-[16px] min-h-[80px]">Community Delegates</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protocol;
