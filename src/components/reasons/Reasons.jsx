import React from 'react'
import Image1 from '../../assets/img1.png'
import Image2 from '../../assets/img2.png'
import Image3 from '../../assets/img3.png'
import Image4 from '../../assets/img4.png'
import Image5 from '../../assets/download (1).png'
import Image6 from '../../assets/download (2).png'
import Image7 from '../../assets/download (3).png'
import Image8 from '../../assets/download (4).png'

import './reasons.css'

const Reasons = () => {
  return (
    <section className='reasons__section section_space'>
      <div className="container">
        <div className="reasons__content flex spaec-between">
          <div className="reasons__images flex">
            <div className="left__image">
              <img src={Image1} alt="" />
            </div>
            <div className="right__images flex column">
              <img src={Image2} alt="" />
              <div className="flex">
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
              </div>
            </div>
          </div>
          <div className="reaseons__text">
            <span className='reasons__subtitle'>SOME REASONS</span>
            <h2 className='section__title'><span>WHY </span>CHOOSE US?</h2>
            <ul className='flex column'>
              <li className='flex'>
                <img src={Image5} alt="" />
                <p>OVER 140+ EXPERT COACHS</p>
              </li>
              <li className='flex'>
                <img src={Image5} alt="" />
                <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
              </li>
              <li className='flex'>
                <img src={Image5} alt="" />
                <p>1 FREE PROGRAM FOR NEW MEMBER</p>
              </li>
              <li className='flex'>
                <img src={Image5} alt="" />
                <p>RELIABLE PARTNERS</p>
              </li>
            </ul>
            <p>OUR PARTNERS</p>
            <div className="logos flex">
              <img src={Image6} alt="" />
              <img src={Image7} alt="" />
              <img src={Image8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reasons