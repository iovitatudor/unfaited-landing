import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Features = () => {
  return (
    <div className="features-area">
      <Container maxWidth={"xl"}>
        <h2>Features</h2>
        <Grid container>
          <Grid xs={12} md={4}>
            <div style={{backgroundImage: "url('/images/16bc815e6554a78e3cc811e169109cbf.png')"}}
                 className="features-item">
              <h3>Unreal Engine 5</h3>
              <h4>
                The Unreal Engine 5 graphics offer revolutionary and unparalleled visual accuracy and realism, immersing
                players in realistic environments
              </h4>
            </div>
          </Grid>
          <Grid xs={12} md={4}>
            <div style={{backgroundImage: "url('/images/f3ed50066bbd3b2762e84c2a6180a232.jpeg')"}}
                 className="features-item">
              <h3>Open world</h3>
              <h4>
                Immersive story of survival and resistance, as well as exploration of diverse landscapes including
                urban, forest, desert, snowy, and radioactive areas
              </h4>
            </div>
          </Grid>
          <Grid xs={12} md={4}>
            <div style={{backgroundImage: "url('/images/9b732d766191fadafe6271b9f1cc105a.png')"}}
                 className="features-item">
              <h3>Gameplay features</h3>
              <h4>
                Players can conquer alien outposts, fortify safe zones, customize weapons, build alliances, and uncover
                the secrets of the post-apocalyptic world
              </h4>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Features;