import axios from 'axios';
import qs from 'qs';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from './alert';
import PropertyCard from './property-card';
import './styles/properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      alertMessage: '',
      isError: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(response => this.setState({ properties: response.data }))
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(() => {
          this.setState({
            alertMessage: 'Server error. Please try again later.',
            isError: true,
          });
        });
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    console.log(currentQueryParams);

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    console.log(newQueryParams);

    const result = qs.stringify(newQueryParams, { addQueryPrefix: true });
    console.log(result);

    return result;
  };

  render() {
    return (
      <div className="propsconstainer">
        <div className="hbar">
          <Link
            to={this.buildQueryString('query', { city: 'Manchester' })}
            className="hbarlink"
          >Manchester
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Leeds' })}
            className="hbarlink"
          >Leeds
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Sheffield' })}
            className="hbarlink"
          >Sheffield
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Liverpool' })}
            className="hbarlink"
          >Liverpool
          </Link>
          <div className="sortBy">
          Sort By >
          </div>
          <Link
            to={this.buildQueryString('sort', { price: 1 })}
            className="hbarlink"
          >Price Ascending
          </Link>
          <Link
            to={this.buildQueryString('sort', { price: -1 })}
            className="hbarlink"
          >Price Descending
          </Link>
        </div>
        <div className="properties">
          {this.state.isError && <Alert message={this.state.alertMessage} />}
          {this.state.properties.map(property => (
            <div key={property._id} className="col">
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                price={property.price}
                city={property.city}
                email={property.email}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Properties;
