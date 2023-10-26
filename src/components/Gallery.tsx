import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 1
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <div className="gallery-area">
      <h2>Gallery</h2>
      <div className='desktop'>
        <Carousel responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  infinite={true}
                  partialVisible={false}
                  centerMode={true}
                  itemClass="carousel-item__">
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
        </Carousel>
      </div>
      <div className='mobile'>
        <Carousel responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  infinite={true}
                  itemClass="carousel-item__">
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
          <div><img src="/images/1.png" alt=""/></div>
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery;