import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <>
      <div class="reactContainer">
        <a href="../index.html" alt="HTML Site"><i className="fab fa-html5"></i></a>
      </div> 
      <div className="greeting">
        <p>Hello, my name is <span>Trevor.</span></p>
        <p>I am a developer living in Denver, CO.</p>
      </div>
      <ul className="social">
        <li>
          <a href="https://github.com/TrevorSchwab" alt="Github">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/trevschwab" alt="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/trevor-schwab-a811a7174/" alt="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
