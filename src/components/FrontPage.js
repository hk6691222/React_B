import React from 'react'
import Badminton from '../images/Badminton.gif';
import Cricket from '../images/Cricket.gif';
import Basketball from '../images/Basketball.gif';
import Cricket1 from '../images/Cricket1.gif';
import GoalKeepper from '../images/GoalKeepper.gif';
import Vollyball from '../images/Vollyball.gif';

function frontPage() {
  return (
    <div className='width:150px height:150px'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Badminton} className="d-block w-100" alt=" " />
      </div>
      <div className="carousel-item">
        <img src={Cricket} className="d-block w-100" alt=" " />
      </div>
      <div className="carousel-item">
        <img src={Basketball} className="d-block w-100" alt=" " />
      </div>
      <div className="carousel-item">
        <img src={Cricket1} className="d-block w-100" alt=" " />
      </div>
      <div className="carousel-item">
        <img src={GoalKeepper} className="d-block w-100" alt=" " />
      </div>
      <div className="carousel-item">
        <img src={Vollyball} className="d-block w-100" alt=" " />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default frontPage
