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
      search: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/PropertyListing')
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
      axios
        .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
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

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };


  handleSearch = event => {
    event.preventDefault();

    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });

    const { history } = this.props;
    history.push(newQueryString);
  };

  render() {
    return (
      <div className="main">

        <div className="sidebar">

          <form onSubmit={this.handleSearch}>
            <input
              placeholder="Property Title"
              className="search searchinput"
              type="text"
              value={this.state.search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <button className="search searchbutton" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>

          <div className="filter">
            <strong>Filter By City</strong>
          </div>
          <Link
            to={this.buildQueryString('query', { city: 'Manchester' })}
            className="filtercity"
          >
            Manchester
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Leeds' })}
            className="filtercity"
          >
            Leeds
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Sheffield' })}
            className="filtercity"
          >
            Sheffield
          </Link>
          <Link
            to={this.buildQueryString('query', { city: 'Liverpool' })}
            className="filtercity"
          >
            Liverpool
          </Link>
          <strong className="sorttitle">Sort By</strong>
          <div className="sortBy">
            <Link
              to={this.buildQueryString('sort', { price: 1 })}
              className="sortbylink"
            >
              Price Ascending
            </Link>
            <Link
              to={this.buildQueryString('sort', { price: -1 })}
              className="sortbylink"
            >
              Price Descending
            </Link>
          </div>

        </div>
        <div className="propsconstainer">
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
      </div>
    );
  }
}

export default Properties;
