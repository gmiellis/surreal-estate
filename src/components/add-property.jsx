import React, { Component } from 'react';
import './styles/add-property.css';
import axios from 'axios';
import Alert from './alert';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: 'Title',
        type: 'Flat',
        bedrooms: '0',
        bathrooms: '0',
        price: '0',
        city: 'Manchester',
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };

    this.handleAddProperty = this.handleAddProperty.bind(this);
  }

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    console.log(this.state.fields);

    axios.post(
      'http://localhost:3000/api/v1/PropertyListing',
      this.state.fields
    )
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };


  render() {
    return (
      <div className="AddProperty">
        <div className="Success">
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        </div>
        <div className="Error">
          {this.state.isError && <Alert message={this.state.alertMessage} />}
        </div>
        <div className="proppage">
          <h3>Add Property Page</h3>
        </div>
        <form onSubmit={this.handleAddProperty}>
          Property Title -
          <input
            name="title"
            value={this.state.fields.title}
            onChange={this.handleFieldChange}
            placeholder="Property Title"
            autoComplete="Property For Sale"
          />
          Property Type -
          <select
            name="type"
            value={this.state.fields.type}
            onChange={this.handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <div>
            Number of Bedrooms -
            <input
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
              type="number"
            />
          </div>
          <div>
            Number of Bathrooms -
            <input
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
              type="number"
            />
          </div>
          City -
          <select
            name="city"
            value={this.state.fields.city}
            onChange={this.handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <div>
            Price -
            <input
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
              type="number"
            />
          </div>
          <div>
            Email -
            <input
              name="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
              placeholder="e.g. jeff@gmail.com"
            />
          </div>
          <button className="addpropbutton" type="submit">
          Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
