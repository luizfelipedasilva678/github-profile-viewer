import React from 'react';
import { screen, render } from '@testing-library/react';
import 'jest-styled-components';
import SearchBar from './SearchBar';

describe('<SearchBar/>', () => {
  it('should render a form', () => {
    const { container } = render(<SearchBar />);
    const element = container.querySelector('form');
    expect(element).toBeDefined();
  });

  it('should render a input', () => {
    const { container } = render(<SearchBar />);
    const element = container.querySelector('input');
    expect(element).toBeDefined();
  });

  it('should render a button', () => {
    render(<SearchBar />);
    const element = screen.getByRole('button', { name: 'Pesquisar' });
    expect(element).toBeDefined();
  });
});
