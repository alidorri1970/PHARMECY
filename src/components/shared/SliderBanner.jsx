import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from "./../styles/header.module.css"
import styles from "./../styles/sliderBanner.module.css"


const data=[
  {
    image:'https://shop.erfanazadeh.com/image/image-slider-4.jpg',
  },
  {
    image:'https://shop.erfanazadeh.com/image/image-slider-3.jpg',
  },
  {
    image:'https://shop.erfanazadeh.com/image/image-slider-1.jpg',
  }
]

export function SliderBanner() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // No pause
    speed: 4000, // Slow movement
    cssEase: "linear"
  };

  return (
    <div className={Container.container}>
    <div className={styles.sliderbox}>
      
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className='bg-white'>
                  <img src={item.image} className='w-60 h-60 object-contain block m-auto '/>
              </div>
            )
          })
        }
      </Slider>
      
    </div>
    </div>
  );
}
