import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="masterContainer">
      <div className="reactContainer">
        <span style={{fontSize: '1rem'}}>Render as HTML app&nbsp;<i className="fa fa-arrow-right">&nbsp;&nbsp;</i></span>
        <a href="../index.html" alt="React Site"><i className="fab fa-html5"></i></a>
      </div> 
      <div className="greeting">
        <p style={{marginTop: 0}}>Hello, my name is <span>Trevor.</span></p>
        <p>I am a developer living in Denver, CO.</p>
        <p>I'd be happy to grant you access to a few of the things I have built.</p>
      </div>
      <div className="logos">
        <div className="projectContainer">
          <div className="logoContainer">
            <a href="https://github.com/Like-Minds/cortex" alt="Like Minds Github Repository">
              <img src={process.env.PUBLIC_URL + 'likemindsLogo.png'} className="likeminds" />
            </a>
          </div>
          <ul className="stackContainer">
            <li>React</li>
            <li>Tailwind</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="projectContainer">
          <div className="logoContainer">
            <a href="https://bitbucket.org/bite_team/bite-react-native-app/src/develop/" alt="Bite Pay Bitbucket Repository">
              <img src={process.env.PUBLIC_URL + 'bitepayLogo.png'} className="bite" />
            </a>
          </div>
          <ul className="stackContainer">
            <li>React</li>
            <li>Node</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <div className="logoContainer">
            <a href="https://bitbucket.org/iplus1programming/i-1_web_tutor/src/master/" alt="iplusone Bitbucket Repository">
              <img src={process.env.PUBLIC_URL + 'iplusoneLogo.svg'} className="iplusone" />
            </a>
          </div>
          <ul className="stackContainer">
            <li>Angular</li>
            <li>Bootstrap</li>
            <li>Django</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <ul className="social">
        <li><a href="https://github.com/TrevorSchwab" alt="Github"><i className="fab fa-github"></i></a></li>
        <li><a href="https://twitter.com/trevschwab" alt="Twitter"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/trevor-schwab-a811a7174/" alt="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
  );
}

export default App;
