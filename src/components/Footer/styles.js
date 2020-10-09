import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-left: 2%;
  margin-right: 2%;

  @media screen and (max-width: 768px) {
    margin-left: 0%;
    margin-right: 0%;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 50%;
  }
`;

export const LightBg = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #3199dc;

  width: 100%;
  padding: 1.3%;
  @media screen and (max-width: 768px) {
    padding: 2.5%;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    padding: 2.3%;
  }
`;

export const Text = styled.div`
  text-transform: uppercase;
  margin-right: 80px;
  color: white;
  font-weight: 500;
  opacity: 1;

  @media screen and (max-width: 768px) {
    margin-right: 30px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    font-size: 20px;
  }
`;
export const ImgWrapperUp = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const UpIcon = styled.img`
  position: absolute;
  width: 15px;
  right: 100px;

  @media screen and (max-width: 768px) {
    right: 18px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 20px;
  }
`;
export const DarkBg = styled.div`
  background-color: #283c4f;

  display: flex;
  padding: 3.3%;

  width: 100%;
  max-height: 5px;

  @media screen and (max-width: 768px) {
    padding: 15.3%;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    padding: 6.3%;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  align-self: center;
  margin-left: 110px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: block;
    margin-left: 0px;
  }
`;

export const CopyText = styled.div`
  align-self: center;
  text-align: center;
  color: white;
  font-size: 12px;
  width: 1000px;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    text-align: initial;
    color: white;
    font-size: 18px;
    width: 1000px;
    margin-left: 180px;

    p {
      display: none;
    }
  }
`;
