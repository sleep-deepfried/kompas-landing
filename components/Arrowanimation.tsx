import React from 'react';

const Arrowanimation = () => {
  return (
    <div
      id="arrowAnim"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="arrowSliding">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay1">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay2">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay3">
        <div className="arrow"></div>
      </div>
      <style>{`
        .arrow {
          width: 5vw;
          height: 5vw;
          border: 2.5vw solid;
          border-color: black transparent transparent black;
          transform: rotate(225deg);
        }
        .arrowSliding {
          position: absolute;
          -webkit-animation: slide 4s linear infinite; 
                  animation: slide 4s linear infinite;
        }
        .delay1 {
          -webkit-animation-delay: 1s; 
            animation-delay: 1s;
        }
        .delay2 {
          -webkit-animation-delay: 2s; 
            animation-delay: 2s;
        }
        .delay3 {
          -webkit-animation-delay: 3s; 
            animation-delay: 3s;
        }
        @-webkit-keyframes slide {
            0% { opacity:0; transform: translateY(-15vh); }	
           20% { opacity:1; transform: translateY(-9vh); }	
           80% { opacity:1; transform: translateY(9vh); }	
          100% { opacity:0; transform: translateY(15vh); }	
        }
        @keyframes slide {
            0% { opacity:0; transform: translateY(-15vh); }	
           20% { opacity:1; transform: translateY(-9vh); }	
           80% { opacity:1; transform: translateY(9vh); }	
          100% { opacity:0; transform: translateY(15vh); }	
        }
      `}</style>
    </div>
  );
};

export default Arrowanimation;
