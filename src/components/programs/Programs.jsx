import React from 'react'
import { IconProgram1, IconProgram2, IconProgram3, IconProgram4 } from '../icons'
import { FaArrowRight } from 'react-icons/fa'
import './programs.css'

const Programs = () => {

  const programs = [
    {
      id: 1,
      title: 'Strength Training',
      text: 'In this program, you are trained to improve your strength through many exercises.',
      icon: <IconProgram1 />
    },
    {
      id: 2,
      title: 'Cardio Training',
      text: 'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.',
      icon:  <IconProgram2 />
    },
    {
      id: 3,
      title: 'Fat Burning',
      text: 'This program is suitable for you who wants to get rid of your fat and lose their weight.',
      icon:  <IconProgram3 />
    },
    {
      id: 4,
      title: 'Health Fitness',
      text: 'This programs is designed for those who exercises only for their body fitness not body building.',
      icon:  <IconProgram4 />
    },
  ]

  return (
    <section className='programs__section section_space'>
      <div className="container">
        <h2 className="programs__header section__title flex center">
          <span>EXPLORE OUR</span>PROGRAMS<span>TO SHAPE YOU</span>
        </h2>
        <div className="prohrams__content flex">
          {programs.map(p => (
            <div className="program flex column space-between" key={p.id}>
              <div className="flex column">
                <div className='program__icon flex center'>
                  {p.icon}
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
              <button className='flex'>Join Now<FaArrowRight /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs