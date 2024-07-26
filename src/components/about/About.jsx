import React from 'react';
import "./About.css";
import Me from "../../assets/me4.jpg";
import { LiaAwardSolid } from "react-icons/lia";
import { CiFolderOn } from "react-icons/ci";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
<div className="about__me-image">
  <img src={Me} alt="about image" />
</div>
        </div>
        <div className="about__content">
<div className="about__cards">
  <article className='about__card'>
<LiaAwardSolid className='about__icon'/>
<h5>Experiance</h5>
<small>1+ years working</small>
  </article>
  <article className='about__card'>
<CiFolderOn className='about__icon'/>
<h5>Projects</h5>
<small>5+ Projects</small>
  </article>
</div>
<p>Hi, I am Akhilesh and I work as a web developer. I am a software engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas. In the end, I love to work towards one goal where in the end we all can contribute towards making a good website. In my free time, you can see me listening to songs and binge-watching series when I am not working with my clients.</p>
<a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About