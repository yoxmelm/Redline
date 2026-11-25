import React, { useEffect, useRef } from 'react'
import logo from '../assets/HomePageAssets/logo.svg'
import appStore from '../assets/HomePageAssets/app-store.jpg'
import playStore from '../assets/HomePageAssets/google-play.jpg'
import payment from '../assets/HomePageAssets/payment-method.png'
import FooterCompo from '../components/HomePageComponent/FooterCompo'
import call from '../assets/HomePageAssets/phone-call.svg'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {

    let block1 = useRef();
    let block2 = useRef();
    let block3 = useRef();
    let block4 = useRef();
    let block5 = useRef();
    let block6 = useRef();
    let last = useRef();
    let mainContainer = useRef();

    useEffect(()=>{
        let blocks = [block1.current, block2.current, block3.current, block4.current, block5.current, block6.current]

        const ctx = gsap.context(()=>{
            let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mainContainer.current,
                        start: "-50% top",
                    }
                    });
    
            blocks.forEach((block)=>{
                tl.from(block,{
                    y: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                },'a')
            })
    
            tl.from(last.current,{
                opacity: 0,
            })

        },mainContainer.current)

        return ()=> ctx.revert();
    },[])

  return (
    <div ref={mainContainer} className='px-4 lg:px-6 mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
            <div ref={block1} className='w-[60%] lg:w-[230px]'>
                <img className='w-[10.5rem] ' src={logo} alt='Logo del supermercado' />
                    <ul className='flex flex-col gap-1'>
                        <li className='text-lg mt-2'>Tu supermercado de confianza para una vida más saludable.</li>
                        <li className='mt-2'><i className="text-[#3BB77E] mr-2 text-lg ri-map-pin-line"></i> 5171 W Campbell Ave, Kent, Utah 53127, Estados Unidos</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-customer-service-line"></i>+92 3283673707</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-share-forward-line"></i>contacto@supermercadofresco.com</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-timer-line"></i>10:00 - 18:00, Lun-Sáb</li>
                    </ul>
            </div>
            <div ref={block2} className='block1'>
                <h4 className='text-2xl font-semibold'>Empresa</h4>
                <FooterCompo item1="nosotros" item2="información de entrega" item3="política de privacidad" item4="términos y condiciones" item5="centro de ayuda" item6="carreras" item7="contáctanos"/>
            </div>
            <div ref={block3} className='block2'>
                <h4 className='text-2xl font-semibold'>Cuenta</h4>
                <FooterCompo item1="iniciar sesión" item2="ver carrito" item3="mi lista de deseos" item4="rastrear mi pedido" item5="ticket de ayuda" item6="detalles de envío" item7="comparar productos"/>
            </div>
            <div ref={block4} className='block3'>
                <h4 className='text-2xl font-semibold'>Corporativo</h4>
                <FooterCompo item1="convertirse en proveedor" item2="programa de afiliados" item3="promociones" item4="accesibilidad" item5="nuestros proveedores" item6="carreras rurales" item7="negocio agrícola"/>
            </div>
            <div ref={block5} className='block4'>
                <h4 className='text-2xl font-semibold'>Populares</h4>
                <FooterCompo item1="leche y lácteos" item2="mantequilla y margarina" item3="huevos" item4="marmalades" item5="cremas y dips" item6="té y kombucha" item7="quesos"/>
            </div>
            <div ref={block6} className='block5 flex flex-col gap-2'>
                <h4 className='text-2xl font-semibold'>Descarga la app</h4>
                <h5 className='mt-2'>Desde la tienda de apps hasta Google Play</h5>
                <div className='mt-4 flex flex-col gap-2'>
                    <img src={playStore} alt="Google Store" className='w-35 hover:translate-y-[-5px] transition-all duration-200 cursor-pointer'/>
                    <img src={appStore} className='w-35 hover:translate-y-[-5px] transition-all duration-200 cursor-pointer' alt="App Store" />
                </div>
                <h5>Pagos seguros</h5>
                <img src={payment} alt="Métodos de pago" className='w-48'/>
            </div>
        </div>

        <div className='mt-8 rounded-2xl border border-[#D8F1E5] bg-[#F4FBF7] p-5 text-[#253D4E] shadow-sm'>
            <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                <div>
                    <p className='text-xs uppercase tracking-[0.2em] text-[#3BB77E] font-bold'>Personalización</p>
                    <h4 className='text-xl font-semibold mt-1'>Créditos de autoría y personalización</h4>
                </div>
                <div className='rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3BB77E] border border-[#CFEFDA]'>Yoxmel Morles y equipo</div>
            </div>
            <p className='mt-3 text-sm text-zinc-600'>Este diseño y la experiencia de compra fueron adaptados y personalizados por Yoxmel Morles y equipo para una versión en español, con enfoque en usabilidad, responsividad y branding comercial.</p>
        </div>

        <div ref={last} className='mt-8 py-4 border-t-[1px] border-[#3BB77E] flex justify-between lg:items-center'>
            <div>
                <h5 className='w-[70%] text-zinc-400 text-sm'>&copy; 2025, <span className='text-[#3BB77E]'>Nest</span> - Plantilla de e-commerce. Todos los derechos reservados.</h5>
            </div>
            <div className='hidden lg:flex lg:flex-col'>
                <div className='flex items-center gap-2'>
                    <img src={call} alt='Icono de llamada' className='w-7'/>
                    <div>
                        <h5 className='text-[#3BB77E] font-bold text-xl'>+92 328-3673707</h5>
                        <h6 className='text-zinc-500 text-sm'>Atención 24/7</h6>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={call} alt='Icono de llamada' className='w-7'/>
                    <div>
                        <h5 className='text-[#3BB77E] font-bold text-xl'>+92 318-5598060</h5>
                        <h6 className='text-zinc-500 text-sm'>Soporte al cliente 24 horas</h6>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:flex-col'>
                <div className='flex items-center gap-2'>
                    <h5 className='font-semibold'>Síguenos</h5>
                    <ul className='flex gap-1'>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-facebook-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-instagram-line"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-twitter-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-github-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-youtube-fill"></i></li>
                    </ul>
                </div>

                <p className='text-zinc-400 text-sm'>Descuento del 15% en tu primera suscripción</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
