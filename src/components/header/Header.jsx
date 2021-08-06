import "../../App.css";

import React from 'react';
import Typed from "react-typed";

function Header() {
    return (
        <div className="header container-fluid">
       <div className="row">
           <div className="main-info">
               <h1>Anuj Joshi</h1>
               <Typed 
    className="typed-text"
    strings={["Web Developer","System Engineer","Front End Developer" ]}
    typeSpeed={50}
    backSpeed={40}
    loop 
    />
           </div>
       </div>
       </div>
    )
}

export default Header
