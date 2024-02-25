// imports for the notes component
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Archive from './Archive';
import { useContext } from 'react';

import { DataContext } from '../../context/DataProvider';


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'felx' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container style={{ marginTop: 16 }}>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive note={archive} />
                            </Grid>
                        ))
                    }
                </Grid>

            </Box>
        </Box>
    );


}

export default Archives;