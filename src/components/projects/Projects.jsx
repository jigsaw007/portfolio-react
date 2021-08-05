import React from 'react'
import htmlImg from '../../img/html.jpg'

function Projects() {
    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 class="section-title" style={{color:"black"}}>Projects</h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <span class="portfolio-item d-block">
                                <div className="foto">
                                    <div><img className="projectImg" src={htmlImg}></img>
                                    <span class="project-date">2008</span><br />
                                    <p class="project-title-settings mt-3">Coding</p> </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <span class="portfolio-item d-block">
                                <div className="foto">
                                    <div><img className="projectImg" src={htmlImg}></img>
                                    <span class="project-date">2008</span><br />
                                    <p class="project-title-settings mt-3">Coding</p> </div>
                                </div>
                            </span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <span class="portfolio-item d-block">
                                <div className="foto">
                                    <div><img className="projectImg" src={htmlImg}></img>
                                    <span class="project-date">2008</span><br />
                                    <p class="project-title-settings mt-3">Coding</p> </div>
                                </div>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
