import React from 'react';
import './Portal.css'; 
import img0 from './img00.jpg'; 
import circleImg from './circles0.jpg';

import chuck0 from './chuck0.jpg';

const Portal = () => {
    return (
        <div className="appContainer" id="titleSection">
            <div className="section">
                <div className="img0scontainer">

                    <div className="imgField" id="imgField0back">
                        <img src={img0} alt="back" />
                        <div className="subTitle">The journey to the end of the death</div>
                    </div>
                    <div className="imgField" id="imgField0front">
                        <img src={img0} alt="front" />
                        <div className="deathTitle">DEATH</div>
                    </div>

                </div>


            </div>

            <div className="imgField" id="circleImg">
                <img src={circleImg} alt="circleImg" />
            </div>





            <div className="section" id="plot">
                <div className="imgField" id="chuck0">
                    <img src={chuck0} alt="chuck0" />
                </div>

                <div className="plotText">Chuck Shuldiner </div>
            </div>
        
        </div>
    );
};

export default Portal;