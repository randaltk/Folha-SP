import React from "react";
import GlobalStyles from "./GlobalStyles";
//components
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Grid01 from "../components/Grid01";
import Grid02 from "../components/Grid02";
import Grid03 from "../components/Grid03";
import Ads from "../components/AdsMobile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Slider />
      <Grid01 />
      <Grid02 />
      <Grid03 />
      <Ads />
      <Footer />
    </>
  );
}
