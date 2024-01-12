import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Footer = ({scrollToRef,productRef,contactRef}) => {
   
    const navigate=useNavigate();
    const location=useLocation();


    const handleScrollToAbout = () => {
        if (scrollToRef && scrollToRef.current) {
            window.scrollTo({
                top: scrollToRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleScrollToContact = () => {
      if (contactRef && contactRef.current) {
          window.scrollTo({
              top: contactRef.current.offsetTop,
              behavior: 'smooth'
          });
      }
  }
    
    const inHome=location.pathname ==='/';
    

    const handleScrollToproduct = () => {
        if (productRef && productRef.current) {
            window.scrollTo({
                top: productRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const handleOnclick=(item)=>{
        if(item==="home"){
           navigate('/');
        }
        else if(item==="insta"){
          navigate('/');
        }
        else if(item==="twitter"){
          navigate('/');
        }
        else{
          
              navigate('/');
            
        }
      }

    const fadeInAnimationVariants={
      initial:{
        opacity:0,
        y:50,
      },
      animate:(index)=>(
        {
          opacity:1,
          y:0,
          transition:{
            duration:0.7,
            delay:0.05*index,
          },
        }),
      
    }

    

  return (
    <div className='w-full  flex flex-col sm:flex-row gap-[30px] sm:gap-0 justify-center sm:justify-between items-center px-3 h-[200px] bg-amber-100'>
      <div className='flex  gap-[30px] sm:gap-[15px] '>
      <motion.div
       variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
       custom="1"
      
      >
      <RiInstagramFill
        
        onClick={()=>{handleOnclick("insta")}}

       
         className='w-[30px] text-slate-500 h-[30px] hover:scale-110 transition-all duration-200 hover:cursor-pointer'/>
      </motion.div>

      <motion.div
      
      variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
       custom="3"
      
      >
      <FaFacebook
       
       onClick={()=>{handleOnclick("")}}

        
         className='w-[30px] text-slate-500 h-[30px] hover:scale-110 transition-all duration-200 hover:cursor-pointer'/>
      </motion.div>
        
         <motion.div
         variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom="5"
          >
         <FaTwitter

onClick={()=>{handleOnclick("twitter")}}

         
         className='w-[30px] text-slate-500 h-[30px] hover:scale-110 transition-all duration-200 hover:cursor-pointer'/>
         </motion.div>
        
      </div>

      {inHome && <div className='flex gap-[20px] items-center'>
            <motion.div
            variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom='1'
             className='underline-hover text-[10px] sm:text-md text-green-700  ' onClick={handleScrollToAbout}  >About us</motion.div>

            <motion.div
            variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom='3'
             className='underline-hover text-[10px] sm:text-md text-green-700 ' onClick={handleScrollToproduct}  >Products</motion.div>

<motion.div
            variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom='5'
             className='underline-hover text-[10px] sm:text-md text-green-700 ' onClick={handleScrollToContact} >Contact Us</motion.div>

            <motion.div 
            variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom='7'
            className='sliding-background text-[10px] sm:text-md hover:cursor-pointer text-green-700 border border-green-700 p-2'  >Subscribe</motion.div>
        </div>}
    </div>
  )
}

export default Footer;
