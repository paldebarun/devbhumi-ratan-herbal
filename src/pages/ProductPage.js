import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import { useState,useEffect } from 'react'
import Productwiper from '../components/Productwiper'
import '../pages/ProductPage.css'
import Footer from '../components/Footer'
import { IoIosClose } from "react-icons/io";


const ProductPage = () => {

  const location=useLocation();

  const [product,setproduct]=useState(location.state.product);

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [product]);

  

  
  const [enquirybox,setopenenquirybox]=useState(false);

  const HandleEnquiryBox=()=>{

    setopenenquirybox(!enquirybox);
  }


  console.log("this is product",product);

  useEffect(() => {
    
    setproduct(location.state.product);
  }, [location.state.product]);
  
  return (
    <div className=' relative '>
     <Navbar  />
    {enquirybox && <div className='w-screen  opacity-65 bg-white top-0  h-full  absolute z-10'>

      
    </div>}

    <div className='w-full h-[70px]'></div>
    

   {enquirybox &&
    <div className='w-screen z-20  p-3 flex justify-center absolute '>
   
    <div className='border  h-[700px] shadow-2xl rounded-3xl relative  bg-white  flex flex-col items-center p-3 '  >
    {/* <div className='w-full h-[50px] bg-slate-500 absolute top-0 rounded-3xl'></div> */}
   <ContactForm formtype={"enquire"} className='bg-white '/>
   <IoIosClose onClick={HandleEnquiryBox} className='border hover:scale-110 transition-all duration-200 bg-white hover:cursor-pointer rounded-full w-[30px] h-[30px]' />
   </div>
   
   </div>
   
   }
   
  <div className='w-screen h-[100px]'></div>

    <div className='flex flex-col sm:flex-row gap-[20px] w-screen px-[20px] items-center sm:items-start md:items-center'>
 
    <img src={product.image} className=' rounded-xl w-[200px] h-6/12 sm:w-4/12 sm:h-5/12' />
    
    <div className='flex items-center flex-col h-full justify-between gap-[15px] sm:gap-[15px] md:gap-[60px]'>
    
    <div className='flex flex-col gap-[20px]'>
    <div className=' xl:text-4xl'>{product.name}</div>
    <div className='w-auto text-center sm:text-left text-[7px] sm:text-sm md:text-[8px] lg:text-[15px] xl:text-[20px] '>{product.description}</div>
    </div>

    <div className= ' sliding-backgrounde hover:cursor-pointer text-white bg-red-600 text-[10px] md:text-sm w-[70px] md:w-[100px] rounded-md p-3' onClick={HandleEnquiryBox}>Enquiry</div>

    </div>
     
    </div>
    <div className='w-screen h-[100px] sm:h-[200px]'></div>

    <div className='flex flex-col text-green-700 gap-[20px] items-center justify-center'>
    
    <div className='text-2xl font-bold sm:text-4xl lg:text-5xl'>
      Other products
    </div>

    <div className='bg-green-700 w-[100px] lg:w-[200px] h-[5px] rounded-full'></div>

    </div>
    


    <div className='flex flex-col'>
                <div className='w-screen h-[100px]'></div>

                {/* products slider */}

                <Productwiper />


            </div>
    
     <div className='w-screen h-[100px]'></div>

    <Footer/>        

    </div>

    
  )
}

export default ProductPage;
