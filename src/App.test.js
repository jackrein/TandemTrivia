import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { restartGame } from './App';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders Tandem Trivia logo', async () => {
  render(<App />);
  const logo = await screen.findByAltText(/Tandem Trivia logo/i);
  expect(logo).toBeInTheDocument();
});

test('restarts game and renders new Question 1', () => {
  render(<App />);  // Need to refactor with PlayBtn as component
  userEvent.click(screen.getByText('Play Again'));
  expect(restartGame).toHaveBeenCalledTimes(1);
  expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
})
