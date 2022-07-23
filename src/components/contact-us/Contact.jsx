import React from 'react'
import Button from '../button/Button'

import './contact.css'

const Contact = () => {
  return (
    <div className='contact__section section_space'>
      <div className="container">
        <div className="contact__content flex center space-between">
          <div className="left__contact__col">
            <h2 className='section__title contact__title relative'>
              <span>READY TO </span>LEVEL UP <br/> YOUR BODY <span>WITH US?</span>
            </h2>
          </div>
          <div className="right__contact__col">
            <div className="input__control relative flex">
              <input type="text" placeholder='Enter Your Email Address here' />
              <Button>Join Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact