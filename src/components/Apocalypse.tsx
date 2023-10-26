import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Apocalypse = () => {
  return (
    <div className="apocalypse-area">
      <Container maxWidth={"xl"} className="apocalypse-container">
        <p>Prepare to embark on an unforgettable journey through
          the post-apocalyptic world of UNFATED</p>
        <Grid container className="apocalypse-grid">
          <Grid xs={12} md={6}>
            <img src="/images/apocalypse-1.png" alt=""/>
            <div className="description">
              The first MMO built on Unreal Engine 5, unlocking the full potential of advanced graphics and
              breath-taking visuals.
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <img src="/images/apocalypse-2.png" alt=""/>
            <div className="description">
              Brace yourself for an immersive experience where survival and resistance intertwine in a struggle for
              humanity's future against an ancient menace that emerged from behind the ice wall.
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Apocalypse;