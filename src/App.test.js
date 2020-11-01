import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import PlayBtn from './components/PlayBtn';

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
  render(<PlayBtn />);
  fireEvent.click(screen.getByText('Play Again'));
  // expect(restartGame).toHaveBeenCalledTimes(1);
  expect(screen.getByText('Question 1')).toBeInTheDocument();
})
