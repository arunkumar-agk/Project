import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../assets/images/Harry-Potter.png';
import Img2 from '../assets/images/Rich-Dad-Poor-Dad.jpg';
import Img3 from '../assets/images/the-book-of-accidents.jpeg';
import Img4 from '../assets/images/the-little-prince.jpg';
import Img5 from '../assets/images/The-lord.jpg';
import '../assets/css/card.css';

function Card() {

  return (
    <div id="scene">
      <div id="left-zone">
        <ul className="list">
          <li className="item">
            <input type="radio" id="first" name="basic_carousel" value="first" checked />
            <label className="label_one" htmlFor="first"><b>ShowCase</b></label>
            <div className="content content_one">
              <div className="cardcontainer">
                <div className="card" style={{ opacity: '0.9' }}>
                  <h3 className="title">Novel</h3>
                  <img src={Img1}/>
                </div>
                <div className="card" style={{opacity: '0.9' }}>
                  <h3 className="title">Educational</h3>
                  <img src={Img2}/>
                </div>
                <div className="card" style={{opacity: '0.9' }}>
                  <h3 className="title">Horror</h3>
                  <img src={Img3}/>
                </div>
                <div className="card" style={{opacity: '0.9' }}>
                  <h3 className="title">Story</h3>
                  <img src={Img4}/>
                </div>
                <div className="card" style={{opacity: '0.9' }}>
                  <h3 className="title">Historical</h3>
                  <img src={Img5}/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
  );
}


export default Card;
