import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/cat.svg/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const header = screen.getByRole(<header>adam robson</header>);
  expect(header).toBeInTheDocument();
});
