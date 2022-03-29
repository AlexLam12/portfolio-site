import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pitchmeeting.png'
import IMG2 from '../../assets/GameSync.png'
import IMG3 from '../../assets/CalculatorApp.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img scr={IMG1} alt="PM Logo" />
          </div>
          <h3>Pitch Meeting</h3>
          <small>discription</small>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img scr={IMG2} alt="GS Logo" />
          </div>
          <h3>Game Sync</h3>
          <small>discription</small>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img scr={IMG3} alt="Calculator" />
          </div>
          <h3>My Calculator</h3>
          <small>discription</small>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio