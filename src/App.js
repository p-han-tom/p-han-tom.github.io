import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import profilepic from "./images/Yearbook1.jpg";
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9be7ff',
      main: '#64b5f6',
      dark: '#2286c3',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffad42',
      main: '#f57c00',
      dark: '#bb4d00',
      contrastText: '#000',
    },
  },
});

const colors = theme.palette;

function App() {

  return (
    <div className="Homepage">
      <Avatar alt="Tom Han"
        className="profilepic"
        src={profilepic}
        style={{
          width: "250px",
          height: "250px",
          border:  "5px solid",
          borderColor: colors.primary.dark
          }
        } />
      <h1>Tom Han</h1>
    </div>
  );
}

export default App;
