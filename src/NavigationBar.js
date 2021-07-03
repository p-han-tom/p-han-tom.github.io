import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './NavigationBar.css';

function NavigationBar() {
    return(
        <AppBar id = "navbar">
            <Toolbar>
                {/* <IconButton edge = "start" aria-label="menu" style = {{marginRight: "30px"}}>
                    <MenuIcon/>
                </IconButton> */}
                <a href="#aboutme">ABOUT ME</a>
                <a href="#projects">PROJECTS</a>
                <a href="#experiences">EXPERIENCE</a>
                <a href = "#contact-info">CONTACT</a>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;