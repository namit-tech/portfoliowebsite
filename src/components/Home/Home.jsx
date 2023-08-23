import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
          <div className="home__content">
            <h1>Namit Jain</h1>
            <h3>Front-End Developer</h3>
            <p >I'm creative front-end developer based in Delhi, and I'm very passionate and dedicated to my work.</p>
            <button className='button__home'>Say Hello</button>
          </div>
            <div className="home__img"></div>
      </section>
    </>
  )
}

export default Home