import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const ContactForm = ({formtype}) => {
    
    
    const { register, handleSubmit, formState: { errors} , setError } = useForm();
    
    const onSubmit = (data) => {
        
        console.log("this is contact form data ", data);
        
        toast.success("The message is submitted");
    }
    

    const location=useLocation();

    
    const inProductPage=location.pathname==='/productpage'

    

  return (
   
         
         
          <div className='flex flex-col items-center justify-center'>

     

        

          <form onSubmit={handleSubmit(onSubmit)} className=' h-[600px] p-5 w-full lg:w-6/12 gap-[20px] flex flex-col justify-center items-center'>
                <div className='flex flex-col w-full gap-[20px] sm:flex-row sm:justify-center items-center'>
                    
                    <div className='flex flex-col  gap-[5px] justify-center items-start'>
                   
                        <input 
                            type="text" 
                            className='border w-full sm:w-[200px] xl:w-[300px] rounded-md bg-slate-200 outline-none p-3 ' 
                            placeholder='First name' 
                            {...register('firstName', { required: true })}
                            
                        />
                        {errors.firstName && <span className='text-red-500 text-[10px]'>*First Name is required</span>}
                    </div>
                       
                   
                    <div className='flex flex-col  items-start gap-[5px]'>
                      
                        <input 
                            type="text" 
                            className='border w-full sm:w-[200px] xl:w-[300px] rounded-md bg-slate-200 outline-none p-3' 
                            placeholder='Last name' 
                            {...register('lastName', { required: true })}
                        />
                        {errors.lastName && <span className='text-red-500 text-[10px]'>*Last Name is required</span>}
                    </div>
                </div>
                <div className='flex  flex-col gap-[5px] items-start'>
                  
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        className='border p-4 w-full sm:w-[420px] xl:w-[620px] bg-slate-200 rounded-md' 
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className='text-red-500 text-[10px]'>*Email is required</span>}
                </div>
                <div className='flex flex-col  items-start gap-[10px]'>
                   
                    <input 
                        placeholder="Message" 
                        className='border outline-none px-5 py-7 w-full sm:w-[420px] xl:w-[620px] h-[150px] rounded-md bg-slate-200'
                        {...register('message', { required: true })}
                    />
                    {errors.message && <span className='text-red-500 text-[10px]'>*Message is required</span>}
                </div>
              

                {formtype==="contact" && <button type="submit" className='sliding-background hover:scale-110 transition-all duration-200 bg-green-700 text-white p-3 rounded-sm hover:cursor-pointer'>Contact us</button>}

                {formtype==="enquire" && <button type="submit" className='sliding-background hover:scale-110 transition-all duration-200 bg-green-700 text-white p-3 rounded-sm hover:cursor-pointer'>Enquire</button>}
            </form>
            </div>


  )
}

export default ContactForm;
