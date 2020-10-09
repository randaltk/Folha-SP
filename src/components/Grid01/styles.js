import styled from "styled-components";

export const Grid01Wrapper = styled.div`
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    margin-left: 3%;
    margin-right: 5%;
    margin-top: 15%;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 10%;
  }
`;

export const Titulo = styled.h1`
  margin-left: 8%;
  font-family: "Inv Maison Neue", "Maison Neue", -apple-system,
    BlinkMacSystemFont, "Open Sans", open-sans, sans-serif;
  font-size: 26px;
  color: #283c4f;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Grid01Container = styled.div`
  display: flex;
  grid-gap: 30px;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-gap: 0px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: initial;
    grid-gap: 30px;
  }
`;

export const Grid01Item = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const Grid01Img = styled.img`
  max-width: 360px;
  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 220px;
  }
`;

export const Grid01Text = styled.div`
  position: absolute;
  margin-top: 13%;
  color: white;
  background-color: #d95640;
  padding: 7px;
  width: 8%;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 25%;
    margin-top: 43%;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 12%;
    font-size: 15px;
    letter-spacing: 1px;
    width: 15%;
  }
`;
