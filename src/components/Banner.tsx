import React from 'react';
import Container from "@mui/material/Container";

const Banner = () => {
  return (
    <div className="banner">
      <Container maxWidth={'xl'} className="desktop">
        <div className="banner-inside">
          <img src="/images/Outlanders.png" alt="" className="main-img"/>
          <h1>
            Behind the ice barrier. And now <br/>
            they’ve come to the mainland
          </h1>
          <button>Add to wishlist</button>
          <div className="banner-bottom-part">
            <div>
              <a href="#">
                <img src="/images/steam 1.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/icn-windows.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/icn-epicgames.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/https___callofthewild.thehunter.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/https___callofthewild.thehunter 1.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/images/twitch 1.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/youtube.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/discord 1.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/square-x-twitter.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/facebook.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/instagram.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Container maxWidth={'xl'} className="mobile">
        <div className="banner-inside">
          <img src="/images/Outlanders.png" alt="" className="main-img"/>
          <h1>
            Behind the ice barrier. And now <br/>
            they’ve come to the mainland
          </h1>
          <button>Add to wishlist</button>
          <div className="banner-bottom-part">
            <div>
              <a href="#">
                <img src="/images/steam 1.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/icn-windows.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/icn-epicgames.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/https___callofthewild.thehunter.png" alt=""/>
              </a>
              <a href="#">
                <img src="/images/https___callofthewild.thehunter 1.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;