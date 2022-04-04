import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pitchmeeting.png'
import IMG2 from '../../assets/GameSync.png'
import IMG3 from '../../assets/CalculatorApp.png'

const portfolioData = [
  {
    id:1,
    image: IMG2,
    title: 'Game Sync',
    discription: "This app is a full-stack game library app where a player can cross reference games in their library with games in a friend’s or contact's library to find common gaming apps amongst both players.",
    github:'https://github.com/AlexLam12/GameSync'
  },
  {
    id:2,
    image: IMG1,
    title: 'Pitch Project',
    discription: "This frontend app is an artist management tool for open mic night. Users can add artists to a lineup and admin users can add, edit, and delete altists from the lineup.",
    github:'https://github.com/AlexLam12/pitchmeeting'
  },
  {
    id:3,
    image: IMG3,
    title: 'My Calculator',
    discription: "This App is a fully functional calculator where I showcased my abilities using React.js. It relies on React hooks like useReducer and useState.",
    github:'https://github.com/AlexLam12/My-Calculator-React'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, discription}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{discription}</small>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio