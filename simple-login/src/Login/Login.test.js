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

test('pressing submit with correct info', async () => {
    render(<Login />);
    const form = screen.getByRole("login");
    const usernameField = screen.getByTestId("usernameField");
    await userEvent.type(usernameField, 'user1');
    const passwordField = screen.getByTestId("passwordField");
    await userEvent.type(usernameField, 'football');
    await fireEvent.click(form);
    expect(screen.queryByText("User is successfully logged in"));
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
