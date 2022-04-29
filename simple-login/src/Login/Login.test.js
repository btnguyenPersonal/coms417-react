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
