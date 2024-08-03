 
import { AppBar, Toolbar, Typography, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <>
       <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Cat Couture
          </Typography>
          <div className="right-links">
            <List style={{ display: 'flex', gap: '1rem' }}>
              <ListItem>
                <Link to="/" className="nav-item" >
                  Products
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/dashboard" className='nav-item' >
                  Dashboard
                </Link>
              </ListItem>
              <ListItem>
                <LoginButton />
              </ListItem>
            </List>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
