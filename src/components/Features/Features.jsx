import React from 'react';
import Feature from "./Feature/Feature";
import {featuresConstants} from "../../utils";


const Features = () => {
  return (
    <div className="page__features features">
      <h1 className="features__title">Ключевые особенности</h1>
      <div className="features__list list">{featuresConstants.map(item=>(<Feature item={item}/>))}</div>
    </div>
  );
};

export default Features;