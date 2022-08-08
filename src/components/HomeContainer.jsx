import React from 'react'
import Delivery from '../../src/assets/delivery.png'
import {Link} from 'react-router-dom'
import HeroBg from "../assets/hero-bg.jpg"
import { heroData } from '../utils/data'




const HomeContainer=()=> {

  return (

    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3' id='home'>

      <div className=' flex-1 flex flex-col items-start justify-center gap-6'>


        <div className='flex items-center gap-2 justify-center bg-gradient-to-br from-headingColor to-green-400  px-4 py-2 rounded-full'>
        <p className='text-lg text-white font-semibold'>Swift and Safe Delivery</p>
        <div className='w-7 h-7 rounded-full overflow-hidden drop-shadow-xl'> <img src={Delivery} className="w-full h-full object-contain" alt='delivery-bike'/></div>
        </div>

        <p className='text-[1rem] md:text-[2.1rem] tracking-wider font-extrabold text-black mt-3 md:w-[80%] '> Healthy, Delicious and Affordable Meals Delivered {" "} <span className='text-green-500 text-lg md:text-[2rem]'> To Your Doorstep </span></p>

        <div className=' hidden md:flex'>
        <p className='md:mt-3 md:text-base md:font-semibold md:leading-7 md:w-[80%] '> When you purchase our food, you are eating a healthy meal prepared in a clean environment. <br/> We buy fresh farm produce to make all our meals. Our cooking environment and utensils are carefully cleaned and sanitized. <br/> Every meal is packed in an eco-friendly bag and container, then dispatched via a clean and fast delivery bike.</p>
        </div>

        <div className='md:hidden  font-semibold '>

        <p className=''> When you purchase our food, you are eating a healthy meal prepared in a clean environment.</p>
 
        <p className=''>Every meal is made with fresh farm produce & packed in an eco-friendly container.</p> 
    
        </div>
      

        <Link to='/'><button className='bg-gradient-to-br from-green-400 to-headingColor rounded-lg w-40 h-8 font-bold hover:text-gray-300 transition-all ease-in-out duration-100 text-white'  type='button'> Order Now</button></Link>
        

      </div>


      <div className='mt-4 md:mt-0 md:py-2 flex md:flex-1 items-center justify-center relative'>

        <img className='rounded-2xl w-[90%] h-600 lg:w-[60%] lg:h-[100%] md:ml-auto'
         src={HeroBg}
        alt='hero-bg'
        />

        <div className="  w-full h-full absolute top-0 lg:left-0 items-center justify-center lg:px-36 grid grid-cols-2 md:gap-x-32 gap-x-8 px-8 gap-y-8	">
         
        {heroData && heroData.map(n => (
             <div key={n.id} className=" py-5 lg:w-190 w-150 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
             <img className='w-24 -mt-10' 
             src={n.imageSrc} 
             alt='meals'
             />
             <p className='text-md lg:text-xl font-extrabold text-black mt-2 lg:mt-2'> {n.name} </p>
              <p className='text-md text-center mt-2 my-2 font-bold text-black'> {n.description} </p> 
              <p className="text-md font-extrabold text-green-500">
               <span className=" font-extrabold text-xs text-green-600">₦</span>{n.price}
             </p>
           </div>
        ))}

        </div>

      </div>


    </section>
  )
}

export default HomeContainer