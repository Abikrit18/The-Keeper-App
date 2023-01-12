import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header(){
    return(
        <div className="header">
            <h1 className="header-text"><HighlightIcon />Keeper</h1>
        </div>
    );
}

export default Header;