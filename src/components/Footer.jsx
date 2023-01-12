import React from "react";

const year = new Date();
const currentYear = year.getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p> Copyright ©️ {currentYear}</p>
        </div>
    );
}

export default Footer;