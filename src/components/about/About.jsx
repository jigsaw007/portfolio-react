import React from "react";
import Potrait from "../../img/blank-profile.png";


function About() {
    return (
        <section id="about">
            
            <div className="col-md-12">
                <h1>About Me</h1>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="polaroid">
                            <span><img height="400px" src = {Potrait}></img>
                            
                            <i class="fab fa-react"></i>
                            <i class="fab fa-js-square"></i>
                            <i class="fab fa-node"></i></span>
                        </div>
                    </div>
                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header"></div>
                                <div className="card-body" style={{fontSize:"120%"}}>
                                    <span className="wave">Hi
                                     :) </span>
                                    <br />
                                    <br />
                                    👋 I'm Anuj Joshi. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default About
