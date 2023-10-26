import React, {FC} from "react";
import Logo from "../images/Logo.svg";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drawer} from "@mui/material";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Header: FC = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log(open);
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({...state, [anchor]: open});
      };

  const closeDrawer =
    (anchor: Anchor) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({...state, [anchor]: false});
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={closeDrawer('left')}
      onKeyDown={closeDrawer('left')}
    >
      <div className="header mobile">
        <div className="header-container-area">
          <Grid container spacing={0}>
            <Grid xs={12} className="menu">
              <ul>
                <li><a href="#Header">Home</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Apocalypse">Storyline</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#BuyGame">Contact</a></li>
              </ul>
              <Grid xs={12} className="header-btn-area">
                <button className="header-btn">Play now</button>
              </Grid>
            </Grid>

          </Grid>
        </div>
      </div>
      <Divider/>
    </Box>
  );
  return (
    <>
      <div className="header desktop">
        <Container maxWidth="xl" className="header-container-area">
          <Grid container spacing={0}>
            <Grid xs={3}>
              <img src={Logo} alt=""/>
            </Grid>
            <Grid xs={7} className="menu">
              <ul>
                <li><a href="#Header">Home</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Apocalypse">Storyline</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#BuyGame">Contact</a></li>
              </ul>
            </Grid>
            <Grid xs={2} className="header-btn-area">
              <button className="header-btn">Play now</button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="header-mobile mobile">
        <img src="/images/mobileLogo.png" alt=""/>
        <div onClick={toggleDrawer('left', true)}
             style={{cursor: 'pointer'}}>
          <img src="/images/burgher.png" alt=""/>
        </div>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </div>
    </>
  )
}

export default Header;