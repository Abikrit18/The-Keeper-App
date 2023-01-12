import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){

    const [isExpanded, setExpanded] = React.useState(false);

    const[note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event){
    const {name, value} = event.target;

    setNote((prevNote) => {
        return {
            ...prevNote,
            [name]: value
        }
    })
    }
 
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick(){
        setExpanded(true);
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded && (<input name="title" onChange={handleChange} placeholder='Title' value={note.title} />)}
                <textarea name="content" onChange={handleChange} placeholder='Take a note...' rows={isExpanded ? 3 : 1} value={note.content} onClick={handleClick} />
                <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;