import styled from "styled-components";

export const AdsMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 100px;
    margin-bottom: 150px;
    margin-left: 40px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 0px;
    width: 300px;
    height: 250px;
    margin-left: 440px;
  }
`;

export const Img = styled.img``;

export const AdsText = styled.div`
  font-size: 12px;
  color: #9a9a9a;
  float: right;
  margin-right: 35px;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-right: 35px;

    font-size: 16px;
  }
`;
