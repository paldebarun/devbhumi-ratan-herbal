import React from 'react'

import { useNavigate } from 'react-router-dom';

const Product = ({image,description,product}) => {
  const navigate=useNavigate();

  const handleProductOnclickHandler=()=>{
    console.log('Product clicked:', product);
    navigate('/productpage',{ state: { product} });
    

  }

  const HandleEnquiryBox=()=>{
    
    
    
  }

  return (
    <div onClick={handleProductOnclickHandler}  className='hover:scale-105 m-5  hover:cursor-pointer transition-all duration-200  py-5 flex flex-col  w-full md:w-[300px] lg:w-[350px] justify-between shadow-lg gap-[20px] h-[660px] sm:h-[700px] items-center'>
    
    <img src={product.image} className=' w-[200px] sm:w-full h-auto  ' />
    
    <div className='w-full h-auto flex justify-center items-center'>
        <div className='w-3/12 h-[5px] bg-green-700 rounded-full'>

        </div>
    </div>
    
    <div className='font-bold text-green-700 text-3xl sm:text-2xl '>{product.name}</div>

    <div className='w-full  text-center py-5 px-5 text-slate-500'>

        {product.description.length > 100 ? `${product.description.substring(0, 100)}...`:product.description}
    </div>

    <div className= ' sliding-backgrounde hover:cursor-pointer text-white bg-red-600 text-[10px] md:text-sm w-[70px] md:w-[100px] rounded-md p-3' onClick={HandleEnquiryBox}>Enquiry</div>
    
    </div>
  )
}

export default Product;
