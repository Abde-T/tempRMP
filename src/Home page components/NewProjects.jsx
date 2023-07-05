import React from 'react';

const NewProjects = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="card__wrapper">
          <h1>Latest Projects</h1>
          <p>see more</p>
        </div>
        <div className="cards">
          {new Array(4).fill(0).map((_, index) =>
            <div className="card_" key={index}>
              <div className="card-1"></div>
              <div className="right">
                <div className="card-2"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="card-3"></div>
                <div className="bottom">
                  <div className="card-4"></div>
                  <div className="card-4"></div>
                  <div className="card-4"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewProjects;