import React from "react";
import { Link } from "react-router-dom";
//import images
import musicImg from "../components/images/music-prev-crop.png";
import weatherImg from "../components/images/weather-crop.png";
import todoImg from "../components/images/todo-crop.png"

const Projects = () => {
    return (
        <div className="projects" id="projects">
          {/* //1st Project */}
            <div className="project_music-player">
              <h1>Music Player</h1>

              <div className="text-container">
                
                <div>
                <br></br>
                 Lo-Fi music, let's relax a little.
                 
                  <br></br>
                  <br></br>
                  <span className="subtitle">Key Features:</span>
                  <br></br>
                  <ul>
                    <li>State and props.</li>
                    <li>UseRef and useEffect.</li>
                    <li>Responsive to all devices.</li>
                  </ul>
                  <div className="th-container">
                    <div className="text-high">
                    React
                    </div>
                    <div className="text-high">
                    SCSS
                    </div>
                  
                  </div>
                  </div>
                </div>
              <div className="img-container" ><img src={musicImg} alt="An img of the music playe project"/></div>
              <div className="button_container">
              <Link to="/musicplayer">
              <button>Live</button>
              </Link>
              <a target="_blank" rel="noreferrer"  href="https://github.com/ErickSaputo/Portfolio/tree/main/src/pages/MusicPlayer">
              <button>Source</button>
              </a>
              </div>
            </div>
            {/* //2nd Project */}
            <div className="project_weather-app">
            <h1>Weather App</h1>
            <div className="text-container">
                
                <div>
                <br></br>
                It's London... just bring an umbrella.
                  <br></br>
                  <br></br>
                  <span className="subtitle">Key Features:</span>
                  <br></br>
                  <ul>
                    <li>Axios for fetching data from API.</li>
                    <li>State and useRef.</li>
                    <li>Responsive to all devices.</li>
                  </ul>
                  

                  <div className="th-container">
                    <div className="text-high">
                    React
                    </div>
                    <div className="text-high">
                    SCSS
                    </div>
                  
                  </div>
                  </div>
                </div>
              <div className="img-container"  ><img src={weatherImg} alt="An img the weather project" /></div>
              <div className="button_container">
              <Link to="/weather">
              <button>Live</button>
              </Link>
              <a target="_blank" rel="noreferrer"  href="https://github.com/ErickSaputo/Portfolio/tree/main/src/pages/WeatherApp">
              <button>Source</button>
              </a>
              </div>
            </div>
            {/* //3rd Project */}
            <div className="project_todo-list">
            <h1>Todo List 2.0</h1>
            <div className="text-container">
                
                <div>
                <br></br>
                My second brain, what would I do without it.
                  <br></br>
                  <br></br>
                  <span className="subtitle">Key Features:</span>
                  <br></br>
                  <ul>
                    <li>Create components inside another lists of components</li>
                    <li>Responsive to all devices.</li>
                  </ul>
                  <div className="th-container">
                    <div className="text-high">
                    Javascript
                    </div>
                    <div className="text-high">
                    SCSS
                    </div>
                  
                  </div>
                  </div>
                </div>
              <div className="img-container" ><img src={todoImg} alt="An img the todo project" /></div>
              <div className="button_container">
              <a target="_blank" rel="noreferrer"  href="https://ericksaputo.github.io/todoApp/todoAppOG/">
              <button>Live</button>
              </a>
              <a target="_blank" rel="noreferrer"  href="https://github.com/ErickSaputo/todoApp/tree/main/todoAppOG">
              <button>Source</button>
              </a>
              </div>
            </div>
        </div>
    )
};

export default Projects;