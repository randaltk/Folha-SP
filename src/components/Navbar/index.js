import React from "react";
import Menu from "../../assets/menu-icon.png";
import Logo from "../../assets/logo.png";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";

import {
  NavWrapper,
  NavContainer,
  Hamburguer,
  HamburguerImg,
  Folha,
  FolhaImg,
  FolhaP,
  ButtonsWrapper,
  ButtonFB,
  FbIcon,
  ButtonTw,
  TwIcon,
  P1,
  P2,
} from "./styles";

function Navbar() {
  return (
    <NavWrapper>
      <NavContainer>
        <Hamburguer>
          <HamburguerImg src={Menu} />
        </Hamburguer>

        <Folha>
          <FolhaImg src={Logo} />
        </Folha>

        <FolhaP>
          O site de teste para <span>novos webs</span>
        </FolhaP>

        <ButtonsWrapper>
          <ButtonFB>
            <FbIcon src={Facebook} />
            <P1>Curtir</P1>
          </ButtonFB>

          <ButtonTw>
            <TwIcon src={Twitter} />
            <P2>Seguir</P2>
          </ButtonTw>
        </ButtonsWrapper>
      </NavContainer>
    </NavWrapper>
  );
}

export default Navbar;
