import React from "react";
import Art01 from "../../assets/se_pirulita-01.png";
import Art02 from "../../assets/se_pirulita-02.png";
import Art03 from "../../assets/suco_de_cevadiss-01.png";
import Art04 from "../../assets/suco_de_cevadiss-02.png";

import {
  Grid03Wrapper,
  GridContainer,
  Section01,
  Titulo,
  Titulo02,
  Desc,
  Line,
  Section02,
  ImageWrapper,
  Img,
  H1,
  P,
  CardContent,
  CardContent02,
  Section03,
  CardContent03,
} from "./styles";

function Grid03() {
  return (
    <Grid03Wrapper>
      <GridContainer>
        <Section01>
          <Titulo>paisis, filhis, espiritis, santis</Titulo>
          <Desc>
            Mussum ipsum cacilds, vidis litro abertis.
            <span>Consetis adipliscings elits</span>
          </Desc>
          <Line />
          <Desc>
            Mussum ipsum cacilds, vidis litro abertis.
            <span>Consetis adipliscings elits</span>
          </Desc>
          <Line />
          <Desc>Mussum ipsum cacilds, vidis litro abertis.</Desc>
          <Line />
          <Desc>
            Mussum ipsum cacilds, vidis litro abertis.
            <span>Consetis adipliscings elits</span>
          </Desc>
          <Line />
          <Desc>Mussum ipsum cacilds, vidis litro abertis.</Desc>
          <Line />
        </Section01>

        <Section02>
          <Titulo02>se pirulitá</Titulo02>
          <ImageWrapper>
            <Img src={Art01} />
            <CardContent>
              <H1>Nam Liber</H1>
              <P>Casamentis faiz malandris se pirulita</P>
            </CardContent>
          </ImageWrapper>

          <ImageWrapper>
            <Img src={Art02} />
            <CardContent02>
              <H1>Gostis</H1>
              <P>Aenean ut ante turpis.Pallentesque laoreet mé</P>
            </CardContent02>
          </ImageWrapper>
        </Section02>

        <Section03>
          <Titulo02>suco de cevadis</Titulo02>
          <ImageWrapper>
            <Img src={Art03} />
            <CardContent03>
              <H1>Gostis</H1>
              <P>Mussum ipsum cacilds, vidis litro abertis.</P>
            </CardContent03>
          </ImageWrapper>

          <ImageWrapper>
            <Img src={Art04} />
            <CardContent03>
              <H1>Gostis</H1>
              <P>Aenean ut ante turpis.Pallentesque laoreet mé</P>
            </CardContent03>
          </ImageWrapper>
        </Section03>
      </GridContainer>
    </Grid03Wrapper>
  );
}

export default Grid03;
