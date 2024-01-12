import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import '../components/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import logo from '../images/logo.png'

const Navbar = ({scrollToRef,productRef,contactRef}) => {

    const navigate=useNavigate();
    const location=useLocation();
    const [openmenu,setmenu]=useState(false);
    
    const HandleOpenMenu=()=>{
        setmenu(!openmenu);
    }
    
    const inHome = location.pathname === '/';

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
      
  return (
    <div className='w-screen relative h-auto flex justify-between items-center p-[30px] '>
      
            <img src={logo} onClick={()=>{handleOnclick("home")}} className='w-[40px] xl:w-[50px] xl:h-[50px] hover:scale-110 duration-200 transition-all hover:cursor-pointer h-[40px] hidden sm:flex ' />
      

       {inHome && <div className='hidden sm:flex gap-[20px] items-center'>
            <div className='underline-hover text-green-700  ' onClick={handleScrollToAbout}>About us</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToproduct}>Products</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToContact}>Contact Us</div>
            <div className='sliding-background hover:cursor-pointer text-green-700 border border-green-700 p-2'>Subscribe</div>
        </div>}

        { inHome && <div className='sm:hidden'>
            {openmenu ?<div className=' absolute z-20 w-[200px] bg-slate-100 rounded-md p-3 flex gap-[20px] flex-col items-center right-[20px]  top-4'>

            <div className='underline-hover text-green-700 ' onClick={handleScrollToAbout}>About us</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToproduct}>Products</div>
            <div className='underline-hover text-green-700 ' onClick={handleScrollToContact}>Contact Us</div>
            <div className='sliding-background hover:cursor-pointer text-green-700 border border-green-700 p-2'>Subscribe</div>

            <div className='rounded-full bg-white p-2 '>
                <IoIosClose onClick={HandleOpenMenu} />
            </div>
            </div> : <IoMdMenu  onClick={HandleOpenMenu} className='text-green-700 w-[25px] absolute right-[20px] h-[25px]'/>}
            
        </div>}

        {!inHome &&
        <IoMdHome onClick={()=>{handleOnclick("home")}}  className='lg:w-[40px] lg:h-[40px] w-[25px] h-[25px] text-green-700 hover:scale-110 transition-all duration-200 hover:cursor-pointer' />
        }
    </div>
  )
}

export default Navbar;
