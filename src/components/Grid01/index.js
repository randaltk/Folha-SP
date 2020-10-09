import React from "react";
import FlexImage01 from "../../assets/highlight-01.png";
import FlexImage02 from "../../assets/highlight-02.png";
import FlexImage03 from "../../assets/highlight-03.png";
import {
  Grid01Wrapper,
  Titulo,
  Grid01Container,
  Grid01Item,
  Grid01Img,
  Grid01Text,
} from "./styles";

function Grid01() {
  return (
    <Grid01Wrapper>
      <Titulo>top cacildis</Titulo>
      <Grid01Container>
        <Grid01Item>
          <Grid01Text>Pindureta</Grid01Text>
          <Grid01Img src={FlexImage01} />
        </Grid01Item>

        <Grid01Item>
          <Grid01Text>Bolis</Grid01Text>
          <Grid01Img src={FlexImage02} />
        </Grid01Item>

        <Grid01Item>
          <Grid01Text>Pindureta</Grid01Text>
          <Grid01Img src={FlexImage03} />
        </Grid01Item>
      </Grid01Container>
    </Grid01Wrapper>
  );
}
export default Grid01;
