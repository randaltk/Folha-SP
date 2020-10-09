import React from "react";
import SldIcon from "../../assets/image_rotate.png";
import PrevIcon from "../../assets/arrow_left-icon.png";
import NextIcon from "../../assets/arrow_right-icon.png";

import {
  SliderWrapper,
  SliderContent,
  SliderImg,
  SliderText,
  SliderH1,
  SliderDesc,
  SliderButtons,
  Prev,
  Next,
  Dots,
  Dot1,
  Dot,
} from "./styles";

function Slider() {
  return (
    <SliderWrapper>
      <SliderContent>
        <SliderImg src={SldIcon} />

        <SliderText>
          <SliderH1>Mussum Ipsum Cacilds</SliderH1>
          <SliderDesc>
            Pra lá, depois divoltis porris,paradis.{" "}
            <span>Paisis,filhis,espiritis santis</span>
          </SliderDesc>
        </SliderText>
      </SliderContent>
      <SliderButtons>
        <Prev src={PrevIcon} />
        <Next src={NextIcon} />
      </SliderButtons>
      <Dots>
        <Dot1 />
        <Dot />
        <Dot />
      </Dots>
    </SliderWrapper>
  );
}

export default Slider;
