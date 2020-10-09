import styled from "styled-components";

// Wrapper

export const Grid03Wrapper = styled.div`
  margin-right: 3%;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: -120px;
  }
`;
export const GridContainer = styled.div`
  display: grid;

  justify-content: center;
  grid-template-columns: 390px 350px 350px;
  grid-template-rows: 300px 50px 200px 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: grid;

    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 300px 50px 200px 50px;
  }
`;

//Section 01

export const Section01 = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Titulo = styled.h1`
  font-family: "Inv Maison Neue", "Maison Neue", -apple-system,
    BlinkMacSystemFont, "Open Sans", open-sans, sans-serif;
  font-size: 26px;
  color: #19a5ea;
  font-weight: 500;
`;
export const Desc = styled.p`
  margin-top: 20px;
  font-weight: 400;
  color: #2c3238;
  width: 80%;

  font-size: 17px;
`;
export const Line = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 50%;
  margin-top: 22px;
  width: 390px;

  @media screen and (max-width: 768px) {
    margin-top: 32px;
    max-width: 340px;
  }
`;

//Section 02

export const Section02 = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 0px;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
`;

export const CardContent02 = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 7px;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-right: 0px;
    margin-top: 20px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    height: 200px;
  }
`;
export const Titulo02 = styled.h1`
  font-family: "Inv Maison Neue", "Maison Neue", -apple-system,
    BlinkMacSystemFont, "Open Sans", open-sans, sans-serif;
  font-size: 26px;
  color: #ea1919;
  font-weight: 500;
`;
export const CardContent = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-right: 0px;
    margin-top: 20px;
  }
`;

export const H1 = styled.h1`
  font-weight: 400;
  color: #e84b39;
  width: 80%;
  text-transform: uppercase;
  font-size: 15px;
`;
export const P = styled.p`
  margin-top: 5px;
  max-width: 150px;
`;

//Section03

export const Section03 = styled.div`
  margin-left: 25px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 240px;
  }
`;
export const CardContent03 = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 3px;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-right: -10px;
    margin-top: 20px;
  }
`;
