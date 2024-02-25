import { TextField, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState , useRef, useContext } from "react";
import {DataContext} from '../../context/DataProvider'
import {v4 as uuid} from 'uuid'

import { ClickAwayListener } from '@mui/base';
const Container = styled(Box)`
display: flex;
flex-direction: column;
width: 600px;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
padding: 10px 15px;
border-radius: 8px;
margin: auto;
min-height: 30px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState(() => ({ ...note, id: uuid() }));
    const { setNotes} = useContext(DataContext);

    const containerRef = useRef(null);

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const handleClickAway =() =>{
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setAddNote({...note, id: uuid() });
        if(addNote.heading || addNote.text){
            setNotes(prevArr => [addNote, ...prevArr]);
            
        }
    }

    const onTextChange =(e) =>{
        let changeNote = {...addNote, [e.target.name]: e.target.value}
        setAddNote(changeNote);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {showTextField &&
                    <TextField
                        placeholder="Title"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e)=> onTextChange(e)}
                        name="heading"
                        value={addNote.heading}
                        />
                }
                <TextField
                    placeholder="Take a Note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    onChange={(e)=> onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />

            </Container>
        </ClickAwayListener>
    );

}

export default Form;
