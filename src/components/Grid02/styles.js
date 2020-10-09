import styled from "styled-components";

export const Grid02Wrapper = styled.div`
  margin-top: 5%;
  margin-left: 3%;

  @media screen and (max-width: 768px) {
    margin-left: 0%;
    max-width: 300px;
    margin-top: 50px;
  }
`;

export const Titulo = styled.div`
  margin-left: 5%;
  font-family: "Inv Maison Neue", "Maison Neue", -apple-system,
    BlinkMacSystemFont, "Open Sans", open-sans, sans-serif;
  font-size: 26px;
  color: #283c4f;
  font-weight: 500;
`;

export const GridContainer = styled.div`
  margin-left: 5%;
  display: grid;

  justify-content: center;

  margin-top: 1%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px 200px 200px 100px;
  grid-template-areas:
    "cara" "serie" "adsense"
    "cantor" "ultima" "adsense";

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: grid;

    justify-content: center;
    margin-left: 385px;
    margin-top: 1%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 300px 200px 200px 100px;
    grid-template-areas:
      "cara" "serie" "adsense"
      "cantor" "ultima" "adsense";
  }
`;
export const GridItem = styled.div``;

export const GridItem02 = styled.div`
  margin-top: 82px;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
  }
`;
export const ImageWrapper = styled.div`
  margin-top: 20px;
`;
export const Img = styled.img`
  @media screen and (max-width: 768px) {
    width: 340px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    height: 202px;
  }
`;
export const H1 = styled.div`
  margin-top: 5px;
  font-weight: 400;
  color: #2481ba;

  width: 8%;
  text-transform: uppercase;
  font-size: 14px;
`;
export const P = styled.p`
  margin-top: 5px;
  font-weight: 400;
  color: #2c3238;
  width: 80%;

  font-size: 17px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AdsText = styled.div`
  position: absolute;
  font-size: 12px;
  color: #9a9a9a;
`;

export const GridItemAds = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 50%;
  margin-top: 52px;
  width: 390px;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    overflow: hidden;
    max-width: 360px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 22px;
  }
`;
