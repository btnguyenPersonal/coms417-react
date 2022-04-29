import { render, screen } from '@testing-library/react';
import { getByRole, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('renders title', () => {
    render(<Login />);
    const titleElement = screen.getByText("Sign In");
    expect(titleElement).toBeInTheDocument();
});

test('pressing submit with no info', async () => {
    render(<Login />);
    const form = screen.getByRole("login");
    await fireEvent.click(form);
    expect(screen.queryByText("User is successfully logged in")).toBeNull();
});

test('successful user1 login', async () => {
  render(<Login />);
  const form = screen.getByRole("login");
  const username = 'user1';
  const pass = 'football';
  const userNameInput = screen.getByText('Username');
  const passwordInput = screen.getByText('Password');
  userEvent.type(userNameInput, username);
  userEvent.type(passwordInput, pass);
  await fireEvent.click(form);
  expect(screen.queryByText("User is successfully logged in"));
});

test('failed user1 login', async () => {
  render(<Login />);
  const form = screen.getByRole("login");
  const username = 'user1';
  const pass = 'soccer';
  const userNameInput = screen.getByText('Username');
  const passwordInput = screen.getByText('Password');
  userEvent.type(userNameInput, username);
  userEvent.type(passwordInput, pass);
  await fireEvent.click(form);
  expect(screen.queryByText("invalid password"));
});
