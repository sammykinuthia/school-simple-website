import React from 'react'
import img1 from '../assets/images/testimonial-user-cover-103.png'
import img2 from '../assets/images/testimonial-user-cover-104.png'

const Experts = () => {
  return (
    <div className='w-full experts-section flex flex-col items-center'>
        <p className="font-bold text-accent text-center">Practice Advice</p>
        <h3 className="h3">Our Experts Teacher</h3>
        <p className="text-secondary">problems tying to resolve the conflicts between the major realms of classical Physics: Newtonian Mechanics</p>
        <div className="experts-cards">
            <div className="expert-card ">
                <img src={img1} alt="" />
                <p className="text-secondary text-center">Lorem ipsum dolor,<br/> sit amet consectetur adipisicing elit.<br/> Maiores, maxime!</p>
                <p className="rating">⭐⭐⭐⭐⭐</p>
                <p className="font-bold">Regina Miles</p>
                <p className="">Designer</p>

            </div>
            <div className="expert-card ">
                <img src={img2} alt="" />
                <p className="text-secondary text-center">Lorem ipsum dolor,<br/> sit amet consectetur adipisicing elit.<br/> Maiores, maxime!</p>
                <p className="rating">⭐⭐⭐⭐⭐</p>
                <p className="font-bold">Regina Miles</p>
                <p className="">Designer</p>

            </div>
        </div>
    </div>
  )
}

export default Experts