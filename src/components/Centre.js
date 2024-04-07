import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import './Centre.css';

const Centre = ({ headerName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to "/story" path
    navigate('/story1');
  };
  const handleStory2Click = () => {
    // Navigate to "/story2" path
    navigate('/story2');
  };
  const handleStory3Click = () => {
    // Navigate to "/story2" path
    navigate('/story3');
  };
  const handleStory4Click = () => {
    // Navigate to "/story2" path
    navigate('/story4');
  };
  const handleStory5Click = () => {
    // Navigate to "/story2" path
    navigate('/story5');
  };
  const handleStory6Click = () => {
    // Navigate to "/story2" path
    navigate('/story6');
  };
  const handleStory7Click = () => {
    // Navigate to "/story2" path
    navigate('/story7');
  };
  const handleStory8Click = () => {
    // Navigate to "/story2" path
    navigate('/story8');
  };

  return (
    <div>
      <Header name={headerName} />
      <div className="heading">
        <h1 style={{ fontSize: '70px' }}>Kids Mode</h1>
      </div>
      <div className='box'>
        <div className='box1' id='container'>
          <img src={one} alt="wait"/>
          <div>
            <h1>Felix and Sammy's Hide-and-Seek Adventure"</h1>
            <button className='btn btn-danger btn-sm' onClick={handleClick}>Play</button>
          </div>
        </div>

        <div className='box2' id='container'>
          <img src={two} alt="wait"/>
          <div>
            <h1>Starbound: Luna and Cosmo's Galactic Adventure</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory2Click}>Play</button>
          </div>
        </div>

        <div className='box3' id='container'>
          <img src={three} alt="wait"/>
          <div>
            <h1>Magical Escapades: Maya and Max's Garden Adventure</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory3Click}>Play</button>
          </div>
        </div>

        <div className='box4' id='container'> 
          <img src={four} alt="wait"/>
          <div>
            <h1>Whiskers and Oliver's Forest Discovery</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory4Click}>Play</button>
          </div>
        </div>

        <div className='box5' id='container'>
          <img src={five} alt="wait"/>
          <div>
            <h1>Leo's Lesson: The Power of Kindness</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory5Click}>Play</button>
          </div>
        </div>
        <br></br>
        <div className='box6' id='container'>
          <img src={six} alt="wait"/>
          <div>
            <h1>Sunrise Companions: Milo and Theo's Journey</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory6Click}>Play</button>
          </div>
        </div>

        <div className='box7' id='container'>
          <img src={seven} alt="wait"/>
          <div>
            <h1>Neighbors in Need: Jason and Tom's Unexpected Bond</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory7Click}>Play</button>
          </div>
        </div>

        <div className='box8' id='container'>
          <img src={eight} alt="wait"/>
          <div>
            <h1>Beneath the Azure Sky: Emily and Sarah's Bond</h1>
            <button className='btn btn-danger btn-sm' onClick={handleStory8Click}>Play</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Centre;
