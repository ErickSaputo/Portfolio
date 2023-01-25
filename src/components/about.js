import React,{useState} from "react";



const About = () => {
    const [languageInfo, setLanguageInfo] = useState('not-show');
    const [buttonClass, setButtonClass] = useState("button unclicked")
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [skillsInfo, setSkillsInfo] = useState('not-show');
    const [button1Class, setButton1Class] = useState("button unclicked")
    const [isButton1Clicked, setIsButton1Clicked] = useState(false)
  
    //toggle language info
    const updateInfo = () => {
      if(!isButtonClicked) {
        setButtonClass("button clicked")
        setLanguageInfo("show")
      } else {
        setButtonClass("button unclicked")
        setLanguageInfo("not-show")
      }
      setIsButtonClicked(!isButtonClicked)
    }
    const updateSkillsInfo = () => {
        if(!isButton1Clicked) {
          setButton1Class("button1 clicked")
          setSkillsInfo("show")
        } else {
          setButton1Class("button1 unclicked")
          setSkillsInfo("not-show")
        }
        setIsButton1Clicked(!isButton1Clicked)
      }
  

    return (
        <div className="about" id="about">
            <div className="about-text">
                <span className="about-title">Who am I</span>
                <p>Life is always brighter if you see it from the right point of view! it's all about perspective.
                <br></br>
                <br></br>
                    I am a problem solver person, I believe that everything has a solution, and it's our job to find the best path to deal with it.
                <br></br>
                <br></br>
                    Learning to code has proven to be a real challenge, that's why I enjoy programming, creating web pages, and exploring this tech world so much. 
                <br></br>
                <br></br>
                </p>
                    <div className="_info-container">
                        <div className="language-container">
                        <button className={buttonClass} onClick={updateInfo} >Languages</button>  
                        <span className={languageInfo}>
                            <ul>
                                <li>English</li>
                                <li>Spanish</li>
                                <li>Italian</li>
                                <li>French (In progress)</li></ul></span>
                        </div>
                        <div className="skills-container">
                        <button className={button1Class} onClick={updateSkillsInfo} >Other skills</button>  
                        <span className={skillsInfo}>
                            <ul>
                                <li>Business Administration</li>
                                <li>Marketing & Branding</li>
                                <li>Social Media</li>
                                <li>Video Editing</li>
                            </ul>
                        </span>
                        </div>
                    </div>
                </div>
            <div className="about-logo">
            <div className="about-title">Technologies</div>
            <ul>
                <li className="java-logo"></li>
                <li className="html-logo"></li>
                <li className="css-logo" ></li>
                <li className="react-logo" ></li>
                <li className="sass-logo" ></li>
            </ul>
            </div>
        </div>
    )
};

export default About;