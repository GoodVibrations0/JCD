import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import deltaminor2 from '../assets/deltaminor2.png';
import deltaminor3 from '../assets/deltaminor3.png';
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
              <p className='lyrics'>Delta Minor <br/>
              Delta Minor Delta Minor <br/>
              Delta Minor  <br/>
              Delta Minor <br/>
              <br/>
              Delta Minor<br/>
              Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor Delta Minor<br/>
              <br/>
              Delta Minor Delta Minor Delta Minor <br/>
              Delta Minor Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor<br/>
              </p>
              <img src={deltaminor2} className="logo" alt="Delta Minor image 2" />
              <p className='lyrics'>Delta Minor <br/>
              Delta Minor Delta Minor <br/>
              Delta Minor  <br/>
              Delta Minor <br/>
              <br/>
              Delta Minor<br/>
              Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor Delta Minor<br/>
              <br/>
              Delta Minor Delta Minor Delta Minor <br/>
              Delta Minor Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor<br/>
              </p>
            </div>
            <span>DELTA MINOR</span>
            <AudioPlayer src={}/>
          </div>
  
          <div className='media-block'>
            <div className='side-by-side'>
              <p className='lyrics'>Delta Minor <br/>
              Delta Minor Delta Minor <br/>
              Delta Minor  <br/>
              Delta Minor <br/>
              <br/>
              Delta Minor<br/>
              Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor Delta Minor<br/>
              <br/>
              Delta Minor Delta Minor Delta Minor <br/>
              Delta Minor Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor<br/>
              </p>
            <img src={deltaminor3} className="logo" alt="Delta Minor image 3" />
              <p className='lyrics'>Delta Minor <br/>
              Delta Minor Delta Minor <br/>
              Delta Minor  <br/>
              Delta Minor <br/>
              <br/>
              Delta Minor<br/>
              Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor Delta Minor<br/>
              <br/>
              Delta Minor Delta Minor Delta Minor <br/>
              Delta Minor Delta Minor<br/>
              Delta MinorDelta Minor<br/>
              Delta Minor<br/>
              </p>
            </div>
            <span>DELTA MINOR</span>
            <AudioPlayer src={}/>
          </div>
          
          <p>
            Joseph Doherty 2025
          </p>
        </div>
        <p className="read-the-docs" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
          {hovered ? `Delta` : `Minor`}
        </p>
      </div>
    )
}

export default DeltaMinor