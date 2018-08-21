import React, { Component } from 'react';
import './styles/add-property.css';
import axios from 'axios';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: 'Manchester',
        email: '',
      },
    };

    this.handleAddProperty = this.handleAddProperty.bind(this);
  }

  handleAddProperty = event => {
    event.preventDefault();

    console.log(this.state.fields);

    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      city: this.state.fields.city,
      email: this.state.fields.email,
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
          />
          Property Type -
          <select
            name="type"
            value={this.state.fields.type}
            onChange={this.handleFieldChange}
          >
            <option value="">--Please choose Property Type--</option>
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
            />
          </div>
          <button type="submit">
          Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
