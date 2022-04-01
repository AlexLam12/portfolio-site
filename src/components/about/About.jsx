import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About me
      </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>
                Experience
              </h5>
              <small>Nashville Software School Grad</small>
            </article>
          
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>
                Projects
              </h5>
              <small>40+</small>
            </article>
          </div>
          
          <p>
          I am a natural problem solver who love to create anything. From aircraft mechanic to software developer, the similarities are more than you would expect from troubleshooting to the attention to detailed required. Software development is something that I find very exciting. My lifetime goal is to continue learning and take my skills to the next level.
          </p>
          <a href= "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About