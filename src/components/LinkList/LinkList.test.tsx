import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkList from './LinkList';

describe('<LinkList />', () => {
  test('it should mount', () => {
    render(<LinkList />);
    
    const linkList = screen.getByTestId('LinkList');

    expect(linkList).toBeInTheDocument();
  });
});