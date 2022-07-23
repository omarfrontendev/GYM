import React, { useEffect, useRef, useState } from 'react'
import CALORIES from '../../assets/calories.png'
import PERSON from '../../assets/hero_image.png'
import IMG from '../../assets/hero_image2.png'
import HEART from '../../assets/heart.png'
import Button from '../button/Button'

import './hero.css'

const Hero = () => {

  const elementRef = useRef();
  const [inView, setInView] = useState(true)

  const widgets = [
    {
      num: 140,
      text: 'EXPERT COACHES',
    },
    {
      num: 978,
      text: 'MEMBERS JOINED',
    },
    {
      num: 50,
      text: 'FITNESS PROGRAMS',
    }
  ];

  const scrollHandler = () => {
    const Position = window.scrollY;
    const elementTop = elementRef.current.clientHeight;
    console.log(elementTop)
    if(Position > elementTop) {
      setInView(false);
    }else {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);


  return (
    <section ref={elementRef}  className={`hero__section relative ${inView ? 'inView' : ''}`}>
      <div className="hero__bgk flex absolute">
        <div className="left__col relative">
          <div className="gradient__bk absolute"></div>
        </div>
        <div className="right__col"></div>
      </div>
      <div className="hero__section-content container">
        <div className="hero_content flex space-between">
          <div className="hero__left-col flex column">
            <p className='hero__subtitle relative'>THE BEST FITNESS CLUB IN THE TOWN</p>
            <h1 className='hero_title main_title'>
              <span className='strok-text'>SHAPE </span> YOUR<br/>IDEAL BODY
            </h1>
            <p className='hero__p'>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
            
            <div className="hero__wedigts flex center space-between">
              <div className="hero__wedigts-coaches flex">
                {widgets.map((w, i) => (
                  <div className='wedigts flex column' key={i}>
                    <span>+ {w.num}</span>
                    <p>{w.text}</p>
                  </div>
                ))}
              </div>
              <div className='hero__wedigts-calories '>
                <div className='calories flex'>
                  <img src={CALORIES} alt="" />
                  <div className="calories_detail flex column space-between">
                    <p>Calories burned</p>
                    <span>220 kcal</span>
                  </div> 
                </div>
              </div>
            </div>

            <div className="btns flex">
              <Button>
                Get Started
              </Button>
              <Button outline={true}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="hero__right-col flex justify-end relative">
            <div className="images">
              <img className='person' src={PERSON} alt="" />
              <img className='img' src={IMG} alt="" />
            </div>
            <div className="heart__card flex column">
              <img src={HEART} alt="" />
              <p>Heart Rate</p>
              <span>116 bpm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero