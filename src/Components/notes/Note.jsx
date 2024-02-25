
import { useContext } from "react";

import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1.5px solid #e0e0e0;
    border-radius: 8px;
`



const Note = ({ note }) => {

    const {notes, setNotes, setArchiveNotes,setDeletedNotes} = useContext(DataContext);

    const archiveNote = (note)=>{
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr])
    }

    const deleteNote = () =>{
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr])
    
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlinedIcon
                    fontSize="small"
                    style={{marginLeft: 'auto'}}
                    onClick={()=> archiveNote(note)}
                />
                <DeleteOutlinedIcon
                fontSize="small"
                onClick={()=> deleteNote()}
                />
            </CardActions>

        </StyledCard>
    );
}

export default Note