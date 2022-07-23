import React, { useState } from 'react'
import { PlanIcon1, PlanIcon2, PlanIcon3 } from '../icons'
import Image from '../../assets/download (5).png'

import './plans.css'

const Plans = () => {

  const [currentActive, setCurrentActive] = useState(2);

  const plans = [
    {
      id: 1,
      title: 'BASIC PLAN',
      num: 25,
      data: ['2 hours of excercises', 'Free consultaion to coaches', 'Access to The Community'],
      icon: <PlanIcon1 />
    },
    {
      id: 2,
      title: 'PREMIUM PLAN',
      num: 30,
      data: ['5 hour of excercises', 'Free consultaion of Coaches', 'Accessto minibar'],
      icon: <PlanIcon2 />
    },
    {
      id: 3,
      title: 'PRO PLAN',
      num: 45,
      data: ['8 hours of excercises', 'Consultation of Private Coach', 'Free Fitness Merchandises'],
      icon: <PlanIcon3 />
    },
  ]

  return (
    <section className='plans__section section_space relative'>
      <div className="flex absolute">
        <div className='gradient__bk'></div>
        <div className='gradient__bk'></div>
      </div>
      <div className="container">
      <h2 className="programs__header section__title flex center">
          <span>READY TO START</span>YOUR JOURNEY<span>NOW WITHUS</span>
        </h2>
        <div className="plans__content flex center">
          {plans.map(p => (
            <div 
              className={`plan flex column ${currentActive === p.id ? 'active' : ''}`} key={p.id}
              onMouseEnter={() => setCurrentActive(p.id)}
              onMouseLeave={() => setCurrentActive(2)}
            >
              <div className="plan__icon">
                {p.icon}
              </div>
              <h3>{p.title}</h3>
              <span>$ {p.num}</span>
              <ul className='flex column'>
                {p.data.map((d, i) => (
                  <li className='flex' key={i}>
                    <img src={Image} alt="" />
                    <p>{d}</p>
                  </li>
                ))}
              </ul>
              <button>Join now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans