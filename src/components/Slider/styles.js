import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    margin-top: 50px;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 1149px;
  max-height: 450px;
  margin-left: 7.5%;

  @media screen and (max-width: 768px) {
    margin-left: 3%;
    margin-right: 3%;
    overflow: hidden;
  }
`;

export const SliderImg = styled.img`
  width: 1149px;
  height: 450px;
  @media screen and (max-width: 768px) {
    width: 450px;
    height: 209px;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 1149px;
    height: 450px;
  }
`;

export const SliderText = styled.div`
  position: absolute;
  top: 88%;
  left: 27%;
  transform: translate(-50%, -50%);
  color: white;

  height: 170px;
  width: 500px;
  span {
    display: none;
  }

  @media screen and (max-width: 768px) {
    top: 55%;
    left: 50%;
    overflow: hidden;
    max-width: 360px;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    left: 26.5%;
    top: 51.8%;
  }
  @media screen and (min-width: 1440px) {
    top: 45%;
  }
`;

export const SliderH1 = styled.div`
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5%;
  background-color: #2c8cc8;
  width: 60%;
  height: auto;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 11px;
    font-size: 15px;
    width: 60%;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 90%;
    font-size: 22px;
  }
`;

export const SliderDesc = styled.div`
  position: absolute;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
    color: #2e4153;
    margin-top: 30px;
    font-weight: bold;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    color: #fff;
    margin-top: 20px;
  }
`;

export const SliderButtons = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Prev = styled.img`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  top: 63%;
  width: auto;
  left: 0;
  margin-left: 6%;
  background-color: white;
  border-radius: 50%;
  transition: 0.6s ease;
  border: 12px solid white;
  @media screen and (min-width: 1440px) {
    top: 30%;
  }
`;
export const Next = styled.img`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  top: 63%;
  right: 0;
  margin-right: 6%;
  background-color: white;
  border-radius: 50%;
  transition: 0.6s ease;
  border: 12px solid white;
  @media screen and (min-width: 1440px) {
    top: 30%;
    margin-right: 10.5%;
  }
`;
export const Dots = styled.ol`
  list-style: none;
  width: 100%;
  position: absolute;
  top: 105%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    top: 60%;
  }

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    top: 63%;
  }
`;

export const Dot1 = styled.li`
  background: #3199dc;
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-left: 8px;

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`;

export const Dot = styled.li`
  background: #888;
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-left: 8px;

  @media screen and (min-width: 768px) and (max-device-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`;
