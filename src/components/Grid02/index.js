import React from "react";
import GridImg from "../../assets/divoltis_porris-01.png";
import GridImg02 from "../../assets/divoltis_porris-02.png";
import GridImg03 from "../../assets/ads-300x600.png";
import GridImg04 from "../../assets/divoltis_porris-03.png";
import GridImg05 from "../../assets/divoltis_porris-04.png";

import {
  Grid02Wrapper,
  Titulo,
  GridContainer,
  GridItem,
  ImageWrapper,
  Img,
  H1,
  P,
  GridItem02,
  AdsText,
  GridItemAds,
  Line,
} from "./styles";

function Grid02() {
  return (
    <Grid02Wrapper>
      <Titulo>divotis porris</Titulo>

      <GridContainer>
        <GridItem>
          <ImageWrapper>
            <Img src={GridImg}></Img>
          </ImageWrapper>
          <H1>Consetis</H1>
          <P>Manduma pindureta quium dia nois paga. Sapien in monti palavris</P>
          <Line />
        </GridItem>

        <GridItem>
          <ImageWrapper>
            <Img src={GridImg02}></Img>
          </ImageWrapper>
          <H1>Aenean</H1>
          <P>Manduma pindureta quium dia nois paga. Sapien in monti palavris</P>
          <Line />
        </GridItem>

        <GridItemAds>
          <AdsText>Publicidade</AdsText>
          <ImageWrapper>
            <Img src={GridImg03}></Img>
          </ImageWrapper>
        </GridItemAds>

        <GridItem02>
          <ImageWrapper>
            <Img src={GridImg04}></Img>
          </ImageWrapper>
          <H1>Matis</H1>
          <P>Manduma pindureta quium dia nois paga. Sapien in monti palavris</P>
          <Line />
        </GridItem02>

        <GridItem02>
          <ImageWrapper>
            <Img src={GridImg05}></Img>
          </ImageWrapper>
          <H1>Divinis</H1>
          <P>Manduma pindureta quium dia nois paga. Sapien in monti palavris</P>
          <Line />
        </GridItem02>
      </GridContainer>
    </Grid02Wrapper>
  );
}

export default Grid02;
