import React from 'react';

const Feature = ({item}) => {
  return (
      <div className="list__item item">
        <div>
          <p className="item__desc">{item.description}</p>
          <p className="item__func">{item.func}</p>
        </div>
        <div className="item__img">
          <img src="../../../../public/img/feature.jpg" alt="feature"/>
        </div>
      </div>
  );
};

export default Feature;