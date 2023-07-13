import React from 'react';
import './Home.css';
import ImageJL from '../../assets/ImageJL.JPEG';

const DarkHome = () => {
  return (
    <>
      <div className="dark-home-hero">
        <div>
          <h1>Bienvenu à mon Portefolio !</h1>
        </div>
      </div>

      <div className="dark-home-info">
        <img src={ImageJL} alt="Profile" />
        <div>
          <h1>Julien Lemieux</h1>
          <p>Bonjour, je suis Julien Lemieux, un développeur spécialisé en React et Bootstrap. J'ai travaillé sur de nombreux projets passionnants et j'ai une solide expérience dans le développement de solutions front-end performantes et conviviales.</p>

          <h2>Mes Skills</h2>
          <div className="dark-home-skills">
            <div className="dark-home-skill">
              <span className="caption">HTML</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">CSS</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">React.js</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">MySQL</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">Java</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">C#</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="dark-home-skill">
              <span className="caption">C++</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DarkHome;