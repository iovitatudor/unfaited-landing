import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Icy = () => {
  return (
    <div className="icy-area">
      <Container maxWidth={"xl"} className="icy-container">
        <p>Not from the depths of outer space, but from an uncharted region concealed behind the icy confines of
          Antarctica, they emerged—a hidden faction that once thrived as the first inhabitants of Earth. </p>
        <Grid container className="apocalypse-grid">
          <Grid xs={12} md={6}></Grid>
          <Grid xs={12} md={6}>
            <div className="description">
              Unleashing a war of devastating proportions, they sought to reclaim dominance over a world they once
              ruled. This long-forgotten chapter in history led to an extermination, reshaping the planet's destiny.
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Icy;