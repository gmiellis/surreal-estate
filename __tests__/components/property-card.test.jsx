import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';


it('renders a property title', () => {
  const wrapper = shallow((
    <PropertyCard title="2 Bedroom House" />
  ));

  expect(wrapper.find('.prop-card-title').text()).toContain('2 Bedroom House');
});

it('renders a type & city', () => {
  const wrapper = shallow((
    <PropertyCard typecity="Flat, Manchester" />
  ));

  expect(wrapper.find('.prop-card-typecity').text()).toContain('Flat, Manchester');
});

it('renders number of bedrooms', () => {
  const wrapper = shallow((
    <PropertyCard bedrooms="2" />
  ));

  expect(wrapper.find('.prop-card-bed').text()).toContain('2');
});

it('renders number of bathrooms', () => {
  const wrapper = shallow((
    <PropertyCard bathrooms="1" />
  ));

  expect(wrapper.find('.prop-card-bath').text()).toContain('1');
});

it('renders a property price', () => {
  const wrapper = shallow((
    <PropertyCard price="123456" />
  ));

  expect(wrapper.find('.prop-card-price').text()).toContain('123456');
});
