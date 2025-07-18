import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const DeltaMinor = () => {
    const [randomSeed, setRandomSeed] = useState(0);
    const [hovered, setHovered] = useState(false)
    const [lyrics1, setLyrics1] = useState(false)
    const [lyrics2, setLyrics2] = useState(false)
  
    return (
      <div className="App">
        {/* mp3 player */}
        <h1 className='smear-text'>Welcome</h1>
        <div className="card">
          <button onClick={() => setRandomSeed(() => {
            let min = Math.ceil(-1000000);
            let max = Math.floor(1000000);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          })}>
            Your Balance is: £{randomSeed}
          </button>
        </div>
        <div> 
          <div className='media-block'>
            <div className='side-by-side'>
              <p className='lyrics'>Lyrics <br/>
              Lyrics Lyrics <br/>
              Lyrics  <br/>
              Lyrics<br/>
              <br/>
              Lyrics Lyrics<br/>
              LyricsLyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              Lyrics Lyrics<br/>
              <br/>
              Lyrics Lyrics Lyrics  <br/>
              Lyrics Lyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              <br/>
              </p>
              <img src={} className="logo" alt="Album art" />
              <p className='lyrics'>Lyrics <br/>
              Lyrics Lyrics <br/>
              Lyrics  <br/>
              Lyrics<br/>
              <br/>
              Lyrics Lyrics<br/>
              LyricsLyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              Lyrics Lyrics<br/>
              <br/>
              Lyrics Lyrics Lyrics  <br/>
              Lyrics Lyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              <br/>
              </p>
            </div>
            <span>ARTIST NAME</span>
            <AudioPlayer src={}/>
          </div>
  
          <div className='media-block'>
            <div className='side-by-side'>
              <p className='lyrics'>Lyrics <br/>
              Lyrics Lyrics <br/>
              Lyrics  <br/>
              Lyrics<br/>
              <br/>
              Lyrics Lyrics<br/>
              LyricsLyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              Lyrics Lyrics<br/>
              <br/>
              Lyrics Lyrics Lyrics  <br/>
              Lyrics Lyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              <br/>
              </p>
            <img src={} className="logo" alt="Artist image" />
              <p className='lyrics'>Lyrics <br/>
              Lyrics Lyrics <br/>
              Lyrics  <br/>
              Lyrics<br/>
              <br/>
              Lyrics Lyrics<br/>
              LyricsLyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              Lyrics Lyrics<br/>
              <br/>
              Lyrics Lyrics Lyrics  <br/>
              Lyrics Lyrics<br/>
              Lyrics Lyrics Lyrics<br/>
              <br/>
              </p>
            </div>
            <span>ARTIST NAME</span>
            <AudioPlayer src={}/>
          </div>
          
          <p>
            Joseph Doherty 2025
          </p>
        </div>
        <p className="read-the-docs" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
          {hovered ? `Artist` : `Page`}
        </p>
      </div>
    )
}

export default Artist