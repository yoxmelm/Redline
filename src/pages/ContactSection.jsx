import React, { useEffect, useRef } from 'react'
import banner from '../assets/HomePageAssets/banner-9.png'
import ContactMiniCard from '../components/HomePageComponent/ContactMiniCard'
import icon1 from '../assets/HomePageAssets/icon-1.svg'
import icon2 from '../assets/HomePageAssets/icon-2.svg'
import icon3 from '../assets/HomePageAssets/icon-3.svg'
import icon4 from '../assets/HomePageAssets/icon-4.svg'
import icon5 from '../assets/HomePageAssets/icon-5.svg'
import icon6 from '../assets/HomePageAssets/icon-6.svg'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {

  const mainDiv = useRef();
  const cardContainer = useRef();
  
   useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main banner
      gsap.from(mainDiv.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mainDiv.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          // markers: true // Enable for debugging
        }
      });

      // Animate card container
      gsap.from(cardContainer.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardContainer.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          // markers: true
        }
      });

    }); // No scope needed since we're using refs

    return () => ctx.revert(); // Proper cleanup
  }, []);


  return (
    <div className='mt-10 px-4 lg:px-6'> 
      <div ref={mainDiv} className='rounded-xl w-full h-[32rem] md:h-[30rem] bg-[#D8F1E5] relative'>
        <img src={banner} alt="Banner Image" className='h-[10rem] md:h-[15rem] lg:h-[21rem] absolute bottom-0 right-0 z-9'/>
        <div className='ContactContent flex flex-col justify-center px-15 lg:px-20 md:w-[36rem] lg:w-[43rem] w-full h-full text-[#253D4E] z-10 relative'>
            <h1 className='text-[2.2rem] font-semibold sm:text-[2.7rem]'>Quédate en casa y recibe tus necesidades diarias desde nuestra tienda</h1>
            <h6 className='mt-3 text-lg text-zinc-500'>Empieza tus compras diarias con <span className='text-[#3BB77E]'>Next Mart</span></h6>
           <div className='mt-10 bg-white flex justify-between items-center rounded-full h-15 lg:mt-13'>
                <div className=' ml-4 flex gap-2 items-center w-[60%] '>
                    <i className="ri-send-plane-line text-xl "></i>
                    <input type='text' placeholder='Tu correo electrónico'  className='w-[130%] outline-none'/>
                </div>
                <button className='heroButton bg-[#3BB77E] text-lg text-white h-full w-34 cursor-pointer rounded-full'>Suscribirme</button>
            </div>
        </div>
      </div>

      {/* Mini Cards Start Here */}
      <div ref={cardContainer} className='mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
        <ContactMiniCard img={icon1} head1='Los mejores precios' head2='Pedidos desde $50'/>
        <ContactMiniCard img={icon2} head1='Envío gratis' head2='Servicios 24/7'/>
        <ContactMiniCard img={icon3} head1='Grandes ofertas' head2='Al suscribirte'/>
        <ContactMiniCard img={icon4} head1='Gran variedad' head2='Descuentos mega'/>
        <ContactMiniCard img={icon5} head1='Devoluciones fáciles' head2='En 30 días'/>
        <ContactMiniCard img={icon6} head1='Entrega segura' head2='En 30 días'/>
      </div>
    </div>
  )
}

export default ContactSection
