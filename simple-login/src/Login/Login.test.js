import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders title', () => {
  render(<Login />);
  const titleElement = screen.getByText("Sign In");
  expect(titleElement).toBeInTheDocument();
});
