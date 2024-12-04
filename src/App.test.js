import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders main app component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});