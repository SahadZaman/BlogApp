import React from 'react'
import '../components/Hero/Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth felexCenter hero-container">
            <div className="hero-left">
                Hero-left
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                 <img src="./hero-image.png" alt="hero-imag" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero