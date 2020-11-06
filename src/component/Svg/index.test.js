import React from 'react';
import { render } from '@testing-library/react';
import Svg from './index';

describe('Svg', () => {
  test('renders Svg component with full props', () => {
    render(<Svg className="icon-bus w-100 h-100" />);
  });

  test('renders Svg component without icon name property', () => {
    render(<Svg className="w-100 h-100" />);
  });

  test('renders Svg component with camelCased icon name property', () => {
    render(<Svg className="icon-paperCup w-100 h-100" />);
  });

  test('renders Svg component with double-dashed icon name property', () => {
    render(<Svg className="icon-self-driving-car w-100 h-100" />);
  });

  test('renders Svg component without width property', () => {
    render(<Svg className="icon-bus h-100" />);
  });

  test('renders Svg component without height property', () => {
    render(<Svg className="icon-bus w-100" />);
  });
});
