import React, {useState, useRef} from "react";
// Import styles
import "../MusicPlayer/styles/musicApp.scss";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import data(songs)

import data from "./data";

function MusicPlayer() {
  const audioRef = useRef(null)
  //state
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[3])
const [isPlaying, setIsPlaying] = useState(false)  
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
});
const [libraryStatus, setLibraryStatus] = useState(false);


const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }
    if(isPlaying) audioRef.current.play()
  

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
     <Song currentSong={currentSong} />
     <Player 
     isPlaying={isPlaying} 
     setIsPlaying={setIsPlaying} 
     currentSong={currentSong} 
     audioRef={audioRef}
     songInfo={songInfo}
     setSongInfo={setSongInfo}
     songs={songs}
     setCurrentSong={setCurrentSong}
     setSongs={setSongs}
     />
     < Library 
     songs={songs} 
     setCurrentSong={setCurrentSong}
     audioRef={audioRef}
     isPlaying ={isPlaying}
     setSongs={setSongs}
     libraryStatus={libraryStatus}
     />
     <audio
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio}
            onEnded={songEndHandler}
            ></audio>
    </div>
  );
}

export default MusicPlayer;
