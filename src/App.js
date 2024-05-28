import React from 'react';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Leaderboard />
    </div>
  );
};

export default App;
