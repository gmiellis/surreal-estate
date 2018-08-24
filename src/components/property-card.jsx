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
        title{props.title}
      </div>
      <div className="prop-card-typecity cont">
        {props.type}Flat, {props.city}Manchester
      </div>
      <div className="prop-card-bed cont">
        <i class="fas fa-bed"></i>
        {props.bedrooms}bedrooms
      </div>
      <div className="prop-card-bath cont">
        <i class="fas fa-bath"></i>
        {props.bathrooms}bathrooms
      </div>
      <div className="prop-card-price cont">
        <i class="fas fa-pound-sign"></i>
        {props.price}price
      </div>
      </div>
      <button className="prop-card-email">
        <i class="far fa-envelope"></i>
        {props.email}
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Email</a>
      </button>
    </div>
  </Fragment>
);

export default PropertyCard;
