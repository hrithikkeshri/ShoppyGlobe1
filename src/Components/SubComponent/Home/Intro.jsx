import {  useState } from "react"
import './Intro.css'
import { Link } from "react-router"



// create intro components which is subcomponent of home components
export default function Intro() {

    return (
        <section  className='introCtn z-0  h-[89vh] bg-cover bg-center'>
           <section className="flex  flex-col justify-center  h-[89vh] text-white  bg-black opacity-70 z-10 p-20" >
             <h1 className="text-3xl md:text-6xl font-bold">Welcome to <span className="text-yellow-400">ShoppyGlobe</span></h1> 
             <p className="text-xl md:text-2xl p-2">Your Ultimate Shopping Destination!</p>
              <button className="cursor-pointer w-fit bg-red-800 p-2 text-3xl rounded-xl px-3 m-1.5 mt-6 hover:bg-red-400" onClick={()=>document.querySelector('#product').click()}><Link to='/products'>Shop Now</Link></button>     
           </section>
        </section>
    )
}