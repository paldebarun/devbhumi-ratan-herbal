import React, {  useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import productdata from '../constants/Productdata';
import Product from './Product';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import './styles.css';

import { Autoplay } from 'swiper/modules';

const Productwiper = () => {
    
    const [slidesPerView, setSlidesPerView] = useState(3); // Default value
    
    // const handleProductOnclickHandler=(product)=>{
    //   console.log('Product clicked:', product);
    //   navigate('/productpage',{product});
      

    // }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set initial value based on current width
    handleResize();

    // Cleanup: remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div >
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    slidesPerView={slidesPerView}
    modules={[Autoplay]}
    className="mySwiper  h-auto flex items-center"
  >

    {productdata.map((product, index) => (
        <SwiperSlide  key={product} virtualIndex={index}>
          <Product product={product}  image={product.image} description={product.description} />
        </SwiperSlide>
        
      ))}

      

  </Swiper></div>
  )
}

export default Productwiper;
