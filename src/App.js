import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import profilepic from "./images/Yearbook1.jpg";
import nhbanner from './images/NorthernHackersBanner.png';
import List from '@material-ui/core/List';
import HelpIcon from '@material-ui/icons/Help';
import ListItem from '@material-ui/core/ListItem';
import { projects } from './Projects.js';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import NavigationBar from './NavigationBar';
import './App.css';
import '@fontsource/roboto';
import { urlAlphabet } from 'nanoid';


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

  generateProjects = () => {
    return projects.map((project, index) => {
      return (
        <div>
          <ListItem
            button
            className="project"
            onClick={(event) => this.handleProjectListClick(event, index)}
          >
            <ListItemIcon>
              <VideogameAssetIcon />
            </ListItemIcon>
            <ListItemText primary={project.title} secondary={project.desc} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  }

  handleProjectListClick = (event, index) => {
    const projects = document.getElementsByClassName("project");

    // highlight selection
    for (let i = 0; i < projects.length; i += 1) {
      projects[i].style.backgroundColor = "#d1d1d1";
    }
    projects[index].style.backgroundColor = "#bdbdbd";

    // display proper text and image

  }


  render() {
    return (
      <div className="homepage">
        <NavigationBar />

        {/* // ANCHOR About me */}
        <div id="parallax">
          <div id="aboutme">
            <div id="aboutme-text">
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


        {/* ANCHOR Project List  */}
        <div id="project-header">
          PROJECTS
        </div>

        <div id="projects">
          <List id="project-list">
            {this.generateProjects()}

            <ListItem>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="???" secondary="More to come..." />
            </ListItem>
          </List>

            
          <img src = {nhbanner} id = "project-img-preview"></img>
          

        </div>
      </div>
    );
  }

}

