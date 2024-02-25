// headerbar component 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {AppBar,Toolbar,Typography,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)`
z-index:1201;
background:#fff;
height:70px;
box-shadow: inset 0 -1px 0 0 #dadce0;

`
    ;
const Heading = styled(Typography)`
color : #5F6368;
font-size: 24px;
position:absolute;
top:20px;
left:100px;
`

const HeaderBar = ({ open, handleDrawer }) => {
    return (
        <>
            <Header open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: 35,
                     }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                      <Heading>GKeep</Heading>  
                    </Typography>
                </Toolbar>
            </Header>
        </>
    );
}
export default HeaderBar