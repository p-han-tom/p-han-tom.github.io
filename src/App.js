import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import profilepic from "./images/Yearbook1.jpg";
import skybackground from "./images/skybackground.jpg"
import { createMuiTheme } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import './App.css';
import '@fontsource/roboto';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b6e3ff',
      main: '#82b1ff',
      dark: '#4d82cb',
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

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <NavigationBar />
        <div id = "parallax">
          <div id="aboutme">
            <div id = "aboutmeText">
              <h1>Tom Han</h1>
              <div>Hello there! My name is Tom and I am a freshman at the University of Waterloo currently enrolled in the 
                computer science co-op program. I'm very passionate for software engineering, and I'm seeking internships
                for the Spring 2022 term where I can apply my programming skills and learn more about software development. 
              </div>
            </div>
            <Avatar alt="Tom Han"
              className="profilepic"
              src={profilepic}
              style={{
                width: "250px",
                height: "250px",
                border: "5px solid",
                borderColor: colors.primary.main,
                boxShadow: "0px 0px 10px"
              }} />
          </div>
        </div>
        
        <div id = "projects">
          
        </div>



      </div>
    );
  }

}

