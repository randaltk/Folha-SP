import styled from "styled-components";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";

export const NavWrapper = styled.div`
  width: 100%;
  background-color: #edf0f1;

  align-items: center;
`;

export const NavContainer = styled.div`
  background-color: #3199dc;
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;

  display: flex;

  height: 115px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

export const Hamburguer = styled.div`
  margin-top: 40px;
  margin-left: 90px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-top: 45px;
    margin-left: 30px;
  }
`;

export const HamburguerImg = styled.img`
  width: 100%;
`;

export const Folha = styled.div`
  margin-top: 17px;
  margin-left: 220px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-top: 18px;
  }
`;

export const FolhaImg = styled.img`
  width: 100%;
`;

export const FolhaP = styled.div`
  color: #d0f2ff;
  margin-top: 65px;
  margin-left: 10px;

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: block;
    margin-top: 85px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 220px;
  margin-left: 160px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: block;
    margin-top: 35px;
    width: 125px;
    height: 65px;
    margin-left: 20px;

    display: flex;
  }
`;

export const ButtonFB = styled.button`
  font-size: 10px;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  border: 1px solid #3199dc;
  border-radius: 5px;
  height: 33px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 45px;
    height: 45px;
    margin-left: 55px;
  }
`;

export const FbIcon = styled(Facebook)`
  height: 25px;
  fill: #335190;
`;

export const TwIcon = styled(Twitter)`
  height: 25px;
  fill: #00aff2;
`;

export const ButtonTw = styled.button`
  font-size: 10px;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  border: 1px solid #3199dc;
  border-radius: 5px;
  height: 33px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
  margin-left: 25px;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 50px;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 45px;
    height: 45px;
    margin-right: 30px;
  }
`;

export const P1 = styled.p`
  color: #335190;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: none;
  }
`;

export const P2 = styled.p`
  color: #00aff2;
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    display: none;
  }
`;
