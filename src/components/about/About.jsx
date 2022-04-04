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
          I’m a professional software developer specialized in frontend and backend web development currently living in Nashville, 
          Tennessee. Creative, ambitious, and a natural problem solver, my fields of competence include SQL, JavaScript, React.js, C#
          and .NET. I’m interested in learning more about backend development, data flow, and open to all opportunities to grow as a software 
          developer.
          <br></br>
          I have a background routed in aviation where I worked as a lead mechanic in the United States Navy for 5 years then went to college 
          at Embry-Riddle Aeronautical University and graduated with a Bachelor of Science in Aeronautics.
          </p>
          <a href= "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About