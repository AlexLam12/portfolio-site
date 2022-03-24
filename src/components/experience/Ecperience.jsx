import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Ecperience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Javascript</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </aticle>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>C#</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>.NET</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>SQL</h4>
            </aticle>
            <aticle className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>MVC</h4>
            </aticle>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Ecperience