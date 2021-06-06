import { render, screen } from '@testing-library/react';
import Ex_1 from '../Ex_1';

test('renders learn react link', () => {
  render(<Ex_1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
