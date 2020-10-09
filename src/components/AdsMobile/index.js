import React from "react";
import MobileAds from "../../assets/ads-300x250.png";
import { AdsMobile, Img, AdsText } from "./styles";

function Ads() {
  return (
    <AdsMobile>
      <AdsText>Publicidade</AdsText>
      <Img src={MobileAds} />
    </AdsMobile>
  );
}

export default Ads;
