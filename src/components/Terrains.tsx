import React from "react";
import Container from "@mui/material/Container";
import SimpleTabs from "./TabPanel";

const Terrains = () => {

  return (
    <div className="terrains-area">
      <Container maxWidth={"xl"} className="terrains-container">
        <p>
          Prepare to embark on an unforgettable journey through <br/> the post-apocalyptic world of UNFATED
        </p>
        <SimpleTabs/>
      </Container>
    </div>
  )
}

export default Terrains;