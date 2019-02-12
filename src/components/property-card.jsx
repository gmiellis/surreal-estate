import React, { Fragment, Proptypes } from 'react';
import './styles/property-card.css';

const PropertyCard = (props) => (
  <Fragment>
    <div className="prop-card">
      <div className="prop-card-banner">
        <i className="fas fa-building"></i>
      </div>
      <div className="prop-cont">
        <div className="prop-card-title cont">
          {props.title}
        </div>
        <div className="prop-card-typecity cont">
          {props.type}, {props.city}
        </div>
        <div className="prop-card-bed cont">
          <i className="fas fa-bed"></i>
          &ensp;{props.bedrooms}
        </div>
        <div className="prop-card-bath cont">
          <i className="fas fa-bath"></i>
          &ensp;{props.bathrooms}
        </div>
        <div className="prop-card-price cont">
          <i className="fas fa-pound-sign"></i>
          &ensp;{props.price}
        </div>
      </div>
      <button className="prop-card-email">
        <a href={`mailto:${props.email}`}>
          <i className="far fa-envelope"></i>
        </a>
      </button>
    </div>
  </Fragment>
);

export default PropertyCard;
