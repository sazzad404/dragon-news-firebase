import React from 'react';
import swimminingImg from "../../assets/media/swimming.png"
import classimg from "../../assets/media/class.png"
import playimg from "../../assets/media/playground.png"
const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
          <h2 className="font-bold mb-5"> QZone </h2>
          <div className="space-y-5">
            <img src={swimminingImg} alt="" />
            <img src={classimg} alt="" />
            <img src={playimg} alt="" />
          </div>
        </div>
    );
};

export default QZone;