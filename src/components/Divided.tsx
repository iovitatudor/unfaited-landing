import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Divided = () => {
  return (
    <div className="divided-area">
      <Container maxWidth={'xl'}>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <img src="/images/divided.png" alt=""/>
            <p>Now, ten years after the catastrophic attack,
              humanity stands divided into two factions</p>
          </Grid>
          <Grid xs={12} md={6}>
            <div className="divided-item">
              <img src="/images/div1.png" alt="" width="100%"/>
              <p>One group roams the barren landscapes, scavenging for sustenance and vital resources,
                their struggle against hunger and deprivation never-ending.</p>
            </div>
            <div className="divided-item">
              <img src="/images/div2.png" alt="" width="100%"/>
              <p>The other faction, valiantly resisting the ancient invaders, finds sanctuary in underground bunkers.
                Within these fortified havens, they muster aid, weapons, and supplies for those who prove their mettle
                in the battle against their former rulers.</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Divided;