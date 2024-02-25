
import { useContext } from "react";

import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
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

    const {notes, setNotes, deletedNotes,setArchiveNotes,setDeletedNotes} = useContext(DataContext);

    const restoreNote = (note)=>{
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr])
    }

    const deleteNote = () =>{
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes);
        
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
            <DeleteOutlinedIcon
                fontSize="small"
                onClick={()=> deleteNote()}
                style={{marginLeft: 'auto'}}
                   
                />
                <UnarchiveOutlinedIcon
                    fontSize="small"
                    onClick={()=> restoreNote(note)}
                />
               
            </CardActions>

        </StyledCard>
    );
}

export default Note