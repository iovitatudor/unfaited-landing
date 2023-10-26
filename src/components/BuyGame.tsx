import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BuyGame = () => {
  return (
    <div className="buy-game-area">
      <Container maxWidth={'xl'}>
        <Grid container className="buy-game-area-inside">
          <Grid md={6}>
            <img src="/images/buyGame.png" alt=""/>
          </Grid>
          <Grid md={6} className="buy-game-area-items">
            <a href="#">
              <img src="/images/image 3346.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/image 3351.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/image 3354.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/image 3352.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/image 3353.png" alt=""/>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BuyGame;