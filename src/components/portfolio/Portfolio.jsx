import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <h3>Pitch Meeting</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn'>Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <h3>Game Sync</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn'>Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
          <h3>My Calculator</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio