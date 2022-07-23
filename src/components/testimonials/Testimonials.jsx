import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'

import './testimonials.css'

const Testimonials = () => {

  const reviewers = [
    {
      id: 1,
      feeedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
      name: 'FRANKLIN',
      job: 'CUSTOMER',
      img: 'https://fitclub-1my.pages.dev/static/media/t-image3.3894413f7bf2b4f1fc54.jpg'
    },
    {
      id: 2,
      feeedback: 'I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!',
      name: 'MATHEW HENDRICKSON',
      job: 'ENTREPRENEUR',
      img: 'https://fitclub-1my.pages.dev/static/media/t-image1.c16c2c261034cf78ee57.png'
    },
    {
      id: 3,
      feeedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint',
      name: 'JOHN KEVIN',
      job: 'COACH',
      img: 'https://fitclub-1my.pages.dev/static/media/t-image2.f5d2e52e514c544dfffb.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const sliderHandler = (type) => {
    if(type === 'inc') {
      if(currentIndex === reviewers.length - 1) {
        setCurrentIndex(0)
      }else {

        setCurrentIndex(prev => prev + 1)
      }
    }
    if(type === 'dec') {
      if(currentIndex === 0) {
        setCurrentIndex(reviewers.length - 1)
      }else {

        setCurrentIndex(prev => prev - 1)
      }
    }
  }

  return (
    <section className='testimony__section section_space'>
      <div className="container">
        <div className="testimony__content flex center">
          <div className="testimony_text flex column">
            <span className='subtitle'>TESTIMONIALS</span>
            <h2 className='section__title'><span>WHAT THEY</span></h2>
            <h2 className='section__title'>SAY ABOUT US</h2>
            {reviewers.map((_, i) => i === currentIndex && (
              <div key={i} className='flex column'>
                <p className='feedback'>{reviewers[currentIndex].feeedback}</p>
                <div className="flex">
                  <span>{reviewers[currentIndex].name} </span> - <p> {reviewers[currentIndex].job}</p>
                </div>
              </div>
            ) )}
          </div>
          <div className="testimony_img">
            <div className="img_user relative">
              <div className="bgk_fill absolute"></div>
              <div className="bgk_outline absolute"></div>
              {reviewers.map((r, i) => i === currentIndex && <img key={i} src={reviewers[currentIndex].img} alt="" />)}
              <div className="btns flex">
                <button className='next_btn' onClick={() => sliderHandler('inc')}><MdNavigateNext /></button>
                <button className='prev_btn' onClick={() => sliderHandler('dec')}><MdNavigateNext /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials