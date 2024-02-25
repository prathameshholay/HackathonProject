import * as React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'wouter';

const NavList = ({ open }) => {

    const navList = [
        {
            id: 1,
            name: 'Notes',
            icon: <LightbulbOutlinedIcon />,
            route: '/'
        },
        {
            id: 2,
            name: 'Archives',
            icon: <ArchiveOutlinedIcon />,
            route: '/archive'
        },
        {
            id: 3,
            name: 'Trash Bin',
            icon: <DeleteOutlinedIcon />,
            route: '/delete'
        }
    ];

    return (
        <List>
            {navList.map(item => (
                <ListItem button key={item.id} component={Link} href={item.route}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
    );
};

export default NavList;
