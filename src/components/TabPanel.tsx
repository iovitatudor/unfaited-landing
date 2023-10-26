import React from "react";
import PropTypes from "prop-types";
import {Tabs, AppBar, Tab} from "@mui/material";

interface TabContainerProps {
  id: number;
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <div className="tab-value">{props.children}</div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const SimpleTabs = () => {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      {/*<AppBar position="static" >*/}
        <Tabs value={value} onChange={handleChange} className="tabs-costum">
          <Tab label="Forest"/>
          <Tab label="Desert"/>
          <Tab label="City"/>
          <Tab label="Radiation zone"/>
          <Tab label="Snow terrain"/>
        </Tabs>
      {/*</AppBar>*/}
      {value === 0 && <TabContainer id={1}><img src="/images/terrains1.png" alt="" width="100%"/></TabContainer>}
      {value === 1 && <TabContainer id={2}><img src="/images/Terrains2.png" alt="" width="100%"/></TabContainer>}
      {value === 2 && <TabContainer id={3}><img src="/images/terrains1.png" alt="" width="100%"/></TabContainer>}
      {value === 3 && <TabContainer id={4}><img src="/images/Terrains2.png" alt="" width="100%"/></TabContainer>}
      {value === 4 && <TabContainer id={5}><img src="/images/terrains1.png" alt="" width="100%"/></TabContainer>}
    </div>
  );
}

export default SimpleTabs;
