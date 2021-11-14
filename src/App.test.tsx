import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import CommentList from './components/CommentList'

const App: React.FC = () => {
    return <div className="App">
      
    </div>
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
