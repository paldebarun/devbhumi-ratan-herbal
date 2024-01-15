import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Productwiper from '../components/Productwiper';
import aboutpagebackgrounde from '../images/aboutpagebackground.png';
import { useRef,useState } from 'react';
import Footer from '../components/Footer';
import LogoText from '../constants/LogoText';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ContactForm from '../components/ContactForm';
import { IoIosClose } from "react-icons/io";

const Home = () => {

  const [enquirybox,setEnquiryBoxOpen ] = useState(false);
  
  

  const center = {
    lat: 30.7333,
    lng: 76.7794,
  };

  const containerStyle = {
    width: '100vw',
    height: '500px',
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.05 * index,
      },
    }),
  };



  const HandleEnquiryBox=()=>{

    setEnquiryBoxOpen(!enquirybox);
  }

  const aboutRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <div className='px-3 relative h-auto flex flex-col gap-[50px] overflow-x-hidden'>
      {/* Navigation bar */}
      <Navbar scrollToRef={aboutRef} contactRef={contactRef} productRef={productRef} />
      {enquirybox && <div className='w-screen  opacity-65 bg-white top-0  h-full  absolute z-10'>
</div>}
      {/* introsection */}
      <div className='Introsection  p-2 flex overflow-x-hidden  w-[10/12] gap-[20px] h-[500px] xl:h-[900px] flex-col justify-center items-center  '>
        <div className='flex font-bold bg-opacity-100  text-4xl h-auto sm:text-7xl xl:text-9xl text-white'>
          {LogoText.map((character, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              custom={index}
              key={index}
            >
              {character}
            </motion.div>
          ))}
        </div>

       

        <div className='w-[100px] sm:w-[200px] h-[5px] rounded-xl bg-white'></div>
      </div>

      {enquirybox &&
    <div className='w-screen z-30 top-[30%] p-3 flex items-center justify-center absolute '>
    
      
    <div className='border  h-[700px] shadow-2xl rounded-3xl relative  bg-white  flex flex-col items-center p-3 '>
    
   <ContactForm formtype={"enquire"} className='bg-white '/>
   <IoIosClose onClick={HandleEnquiryBox} className='border hover:scale-110 transition-all duration-200 bg-white hover:cursor-pointer rounded-full w-[30px] h-[30px]' />
   </div>
   
   </div>
   
   }
      {/* product section */}
      <div ref={productRef} className='w-screen h-[200px] items-center justify-center flex py-3 flex-col gap-[15px]'>
        <div className='text-3xl lg:text-5xl text-green-700'>OUR PRODUCTS</div>
        <div className='w-[100px] lg:w-[200px] h-[5px] rounded-lg bg-green-700'></div>
      </div>
      <div className='flex flex-col'>
        <div className='w-screen h-[100px]'></div>
        {/* products slider */}
        <Productwiper setEnquiryBoxOpen={setEnquiryBoxOpen} />
      </div>
      <div className='w-screen h-[200px]'></div>
      {/* about us section */}
      <div ref={aboutRef} className='flex h-auto items-center xl:justify-center xl:flex-row  md:h-[600px] flex-col xl:gap-[30px] gap-[50px]'>
        <div className='w-9/12 xl:w-[800px] h-full '>
          <img src={aboutpagebackgrounde} className='w-full h-full' alt='about-background' />
        </div>
        <div className='flex w-full xl:w-6/12  flex-col items-center gap-[20px]'>
          <div className='w-full flex items-center flex-col gap-[15px]'>
            <div className='text-green-700 font-bold text-2xl'>ABOUT</div>
            <div className='w-[50px] h-[5px] bg-green-700 rounded-full' />
          </div>
          <div className='px-2'>
            Established in 1984. Devbhumi Ratan Herbal is a tapestry woven with threads of tradition, innovation and a profound respect for nature. Rooted in the lap of Himalayas, our journey began with a vision to unlock the secrets of ancient herbal wisdom. With a deep understanding of the rich biodiversity that graces the Devbhumi (Land of the Gods), we embarked on a mission to harness the healing power of the herbs that thrive in this sacred soil.
          </div>
        </div>
      </div>
      <div className='w-screen h-[300px]'></div>
      {/* contact us form */}
      <div ref={contactRef} className='flex items-center  flex-col lg:flex-row lg:gap-0 gap-[20px]'>
        <LoadScript googleMapsApiKey='AIzaSyD1H6vYzRDDrv3LCP0idGuSTiACkyF0yr8'>
          <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
        <ContactForm formtype={"contact"} />
      </div>
      <div className='w-full h-[100px]'></div>
      {/* footer section */}
      <Footer scrollToRef={aboutRef} contactRef={contactRef} productRef={productRef} />
    </div>
  );
};

export default Home;
