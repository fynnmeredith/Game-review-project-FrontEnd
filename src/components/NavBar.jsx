import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginIcon from '@mui/icons-material/Login';


export default function NavBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Nav">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Boardmasters
          </Typography>
          <Button color="inherit"><ArrowBackIcon style={{ fontSize: 25}}/>Back</Button>
          <Button color="inherit"><Link to="/login"><LoginIcon style={{ fontSize: 20}} />Login</Link></Button>
          <Button color="inherit"><Link to={'/'}><HomeIcon style={{ fontSize: 50}} /></Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}