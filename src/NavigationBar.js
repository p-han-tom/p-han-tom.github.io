import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './NavigationBar.css';

function NavigationBar() {
    return(
        <AppBar position = "fixed">
            <Toolbar>
                {/* <IconButton edge = "start" aria-label="menu" style = {{marginRight: "30px"}}>
                    <MenuIcon/>
                </IconButton> */}
                <a href="#aboutme">About me</a>
                <a>Projects</a>
                <a>Contact</a>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;