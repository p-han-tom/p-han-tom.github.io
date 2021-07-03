import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import profilepic from "./images/Yearbook1.jpg";
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { projects } from './Projects.js';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NavigationBar from './NavigationBar';
import { IconButton } from '@material-ui/core/'
import './App.css';
import '@fontsource/roboto';

// import {ArrowBackIosIcon, VideogameAssetIcon, }


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
    this.state = {
      projectIndex: 0,
      projectLinks: [],
      projectListDisplay: true,
      dropdownDirectionIcon: "fas fa-arrow-left",
      experiencesIndex: 0
    }
  }

  generateProjects = () => {
    return projects.map((project, index) => {
      return (
        <div className="projectContainer">
          <ListItem
            button
            className="project"
            onClick={(event) => this.handleProjectListClick(event, index)}
          >
            <ListItemIcon>
              <Icon className={project.icon}></Icon>
            </ListItemIcon>
            <ListItemText primary={project.title} secondary={project.desc} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  }

  generateProjectLinks = (index) => {
    let arr = []
    for (let i = 0; i < projects[this.state.projectIndex].links.length; i++) {
      arr.push(<IconButton href={projects[index].links[i]}>
        <Icon className={projects[index].linkIcons[i]}></Icon>
      </IconButton>);
    }
    this.setState({ projectLinks: arr });

  }

  generateExperiences = () => {

  }

  handleProjectListClick = (event, index) => {
    const projectList = document.getElementsByClassName("project");

    // highlight selection
    for (let i = 0; i < projectList.length; i += 1) {
      projectList[i].style.backgroundColor = "#d1d1d1";
    }
    projectList[index].style.backgroundColor = "#bdbdbd";

    // display proper text and image
    this.setState({ projectIndex: index });

    // display correct links
    this.generateProjectLinks(index);
  }

  hideProjectList = (event) => {
    this.setState({dropdownDirectionIcon: (this.state.projectListDisplay) ? "fas fa-arrow-right" : "fas fa-arrow-left"});
    document.getElementById("project-list").style.width = (this.state.projectListDisplay) ? "0px" : "300px";
    document.getElementById("dropdown").style.left = (this.state.projectListDisplay) ? "0px" : "300px";
    this.setState({ projectListDisplay: !this.state.projectListDisplay });
  }


  render() {
    return (
      <div className="homepage">
        <NavigationBar />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />

        {/* // ANCHOR About me */}
        <div id="aboutme">
          <Avatar alt="Tom Han"
            className="profilepic"
            src={profilepic}
            style={{
              width: "13rem",
              height: "13rem",
              border: "5px solid",
              borderColor: colors.primary.main,
              boxShadow: "0px 0px 10px"
            }} />
          <div id="aboutme-text">
            <h1>Tom Han</h1>
            <div>Hello there! My name is Tom and I am a freshman at the University of Waterloo currently enrolled in the
              computer science co-op program. I'm very passionate for software engineering, and I'm seeking internships
              for the Spring 2022 term where I can apply my programming skills and learn more about software development.
            </div>
          </div>
        </div>


        {/* ANCHOR Project List  */}
        <div id="header">
          PROJECTS
        </div>

        <div id="projects">
          <IconButton id="dropdown" onClick={(event) => this.hideProjectList(event)}>
            <Icon className={this.state.dropdownDirectionIcon}></Icon>
          </IconButton>
          <List id="project-list" >

            {this.generateProjects()}

            <div className="projectContainer">
              <ListItem>
                <ListItemIcon>
                  <Icon className="fas fa-question"></Icon>
                </ListItemIcon>
                <ListItemText primary="???" secondary="More to come..." />
              </ListItem>
            </div>

          </List>

          <img src={require('./images/' + projects[this.state.projectIndex].image).default} id="project-img-preview"></img>

          <Card id="project-desc">
            <CardContent>
              <h1>{projects[this.state.projectIndex].title}</h1>
              <div>{projects[this.state.projectIndex].projectDesc}</div>
            </CardContent>
            <CardActions id="linkArea">
              {this.state.projectLinks}
            </CardActions>
          </Card>

        </div>

        {/* ANCHOR Experience */}
        <div id="header">
          EXPERIENCE
        </div>

        <div id="experiences">
          <Card className="an-exp">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="40%"
              image={require("./images/AccumineBanner.png").default}
              title="Accumine Technologies"
            />
            <CardContent>
              <h1>Accumine Technologies</h1>
              <div>filler</div>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>

          <Card className="an-exp">
            <CardContent>
              <h1>{projects[this.state.projectIndex].title}</h1>
              <div>{projects[this.state.projectIndex].projectDesc}</div>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>




        </div>



      </div>
    );
  }

}

