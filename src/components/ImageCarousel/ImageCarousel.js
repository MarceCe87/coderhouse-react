import { Carousel } from 'react-carousel-minimal';
import React from "react";


const ImageCarousel = () => {
    const data = [
        {
          image: "https://bandaicollectors.com.mx/img/banpresto-header-5.jpg",         
        },
        {
          image: "https://bandaicollectors.com.mx/img/anime-header6.jpg",         
        },
        {
          image: "https://bandaicollectors.com.mx/img/header-dragonball-6.jpg",
        },
        {
          image: "https://bandaicollectors.com.mx/img/header-megahouse-1.jpg",
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return ( 
        <div className="App">
            <div style={{ textAlign: "center" }}>

                <div style={{
                    
                }}>
                    <Carousel
                        data={data}
                        time={3000}
                        width="100%"
                        height="500px"
                        captionStyle={captionStyle}
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxHeight: "500px",                           
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

export default ImageCarousel;