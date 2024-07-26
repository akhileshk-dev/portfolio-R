import React from 'react';
import { BsFillPatchCheckFill } from "react-icons/bs";
import "../Experience/Experience.css"

const Experience = () => {
  return (
    <div className='main__experience-container'>
    <section id='experience'>
    <h5>What Skill I Have</h5>
    <h2>My Skills</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
<h3>Frontend Development</h3>
<div className='experience__content'>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>HTML</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>CSS</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>Bootstrap</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>JavaScript</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>React</h4>
</div>
  </article>
</div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
<div className='experience__content'>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>Node.js</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>Express.js</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>MongoDb</h4>
</div>
  </article>
  <article className='experience'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
<div>
  <h4>Mongoose</h4>
</div>
  </article>
</div>

</div>
    </div>
      
    </section>
    </div>
  )
}

export default Experience