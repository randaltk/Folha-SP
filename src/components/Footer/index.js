import React from "react";
import Logo from "../../assets/logo_footer.png";
import IconUp from "../../assets/arrow_top-icon.png";
import {
  FooterWrapper,
  LightBg,
  Text,
  ImgWrapperUp,
  UpIcon,
  DarkBg,
  LogoImg,
  CopyText,
} from "./styles";

function Footer() {
  return (
    <FooterWrapper>
      <LightBg>
        <ImgWrapperUp>
          <Text>Voltar ao topo</Text>
          <UpIcon src={IconUp} />
        </ImgWrapperUp>
      </LightBg>
      <DarkBg>
        <LogoImg src={Logo} />

        <CopyText>
          Copyright Folha de S.Paulo. Todos os direitos reservados. É proibida a
          reprodução do conteúdo desta página em qualquer
          <p>
            meio de comunicação, eletrônico ou impresso, sem autorização escrita
            da Folha Online.
          </p>
        </CopyText>
      </DarkBg>
    </FooterWrapper>
  );
}

export default Footer;
