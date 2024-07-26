import React from 'react';
import "./Portfolio.css";

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src="https://c4.wallpaperflare.com/wallpaper/626/292/964/anime-anime-girls-original-characters-computer-wallpaper-preview.jpg" alt="project" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/akhileshk-dev/food-del-frontend" className='btn1'>Github</a>
        <a href="https://food-del-frontend-d7dl.onrender.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src="https://c4.wallpaperflare.com/wallpaper/626/292/964/anime-anime-girls-original-characters-computer-wallpaper-preview.jpg" alt="project" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn1'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src="https://c4.wallpaperflare.com/wallpaper/626/292/964/anime-anime-girls-original-characters-computer-wallpaper-preview.jpg" alt="project" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href="https://github.com" className='btn1'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src="https://c4.wallpaperflare.com/wallpaper/626/292/964/anime-anime-girls-original-characters-computer-wallpaper-preview.jpg" alt="project" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn1'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src="https://c4.wallpaperflare.com/wallpaper/626/292/964/anime-anime-girls-original-characters-computer-wallpaper-preview.jpg" alt="project" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className='btn1' target='blank'>Github</a>
        <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio