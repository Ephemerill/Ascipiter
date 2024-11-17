import React from 'react';

function Meteors() {
  const meteors = new Array(10).fill(true);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((_, idx) => (
        <div key={idx} className="meteor-container absolute">
          <div
            className="absolute meteor animate-meteor-effect"
            style={{
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              animationDelay: Math.random() * 1 + 's',
              animationDuration: Math.random() * 1 + 's',
            }}
          >
            <div className="meteor-tail" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Meteors;