import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import TopBanner from "../components/TopBanner";
import Protocol from "../components/Protocol";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });
  return (
    <>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Header />
        <TopBanner></TopBanner>
        <div className="relative">
          <Protocol></Protocol>
          <Feature></Feature>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
