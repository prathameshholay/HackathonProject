import { useContext } from "react";
import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import UnArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1.5px solid #e0e0e0;
    border-radius: 8px;
`

const Archive = ({ note }) => {
    const { archiveNotes, setArchiveNotes, setNotes, setDeletedNotes } = useContext(DataContext);

    const UnarchiveNote = (note) => {
        if (archiveNotes && archiveNotes.length > 0) {
            const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
            setArchiveNotes(updatedNotes);
            setNotes(prevArr => [note, ...prevArr]);
        }
    }

    const deleteNote = () => {
        if (archiveNotes && archiveNotes.length > 0) {
            let updatedNotes = archiveNotes.filter(data => data.id !== note.id);
            setArchiveNotes(updatedNotes);
            setDeletedNotes(prevArr => [note, ...prevArr]);
        }
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <UnArchiveOutlinedIcon
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => UnarchiveNote(note)}
                />
                <DeleteOutlinedIcon
                    fontSize="small"
                    onClick={() => deleteNote()}
                />
            </CardActions>
        </StyledCard>
    );
}

export default Archive;
