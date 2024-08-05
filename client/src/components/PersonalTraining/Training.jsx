import React from 'react';
import './training.css';
// import womanImg from '../../assets/woman.png';

const training = () => {
  return (
    <section className="training">
      <div className="training__content">
        <div className="training__text">
          <h2 className="training__title">Why should people choose <span>Our services</span></h2>
          <h3 className="training__subtitle">Personal Training</h3>
          <p className="training__description">
            Step into our virtual-gym and embark on journey.
            to healthier you with the support of personal
            trainers
          </p>
          <h3 className="training__subtitle">Expert Trainer</h3>
          <p className="training__description">
            We have experts who expertise in technique and
            motivation ensuring effective and safe workouts
          </p>
          <button className="training__button">Join now</button>
        </div>
        <div className="training__image">
          <img src="https://i.pinimg.com/564x/46/2f/85/462f850adb911426062261599deae75f.jpg" alt="Woman working out" className="training__img" />
        </div> 
      </div>
    </section>
  );
};

export default training;