import React from 'react'

function Project() {
    return (
        <div>

            <section id="projects" class="bg-light py-5">
                <div class="container">
                    <h2>Projects</h2>
                    <p>Here are some of the projects I've worked on:</p>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="card-img-top" alt="Project1" />
                                <div class="card-body">
                                    <h5 class="card-title">Project 1</h5>
                                    <p class="card-text">React Weather App</p>
                                    <a href="/" class="btn btn-primary">View Project Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="card-img-top" alt="Thumbnail" />
                                <div class="card-body">
                                    <h5 class="card-title">Project 2</h5>
                                    <p class="card-text">Movie Cart App</p>
                                    <a href="/" class="btn btn-primary">View Project Details</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="card-img-top" alt="Project3" />
                                <div class="card-body">
                                    <h5 class="card-title">Project 3</h5>
                                    <p class="card-text">Description of Project 3</p>
                                    <a href="/" class="btn btn-primary">View Project Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" class="py-5">
                <div class="container">
                    <h2>Testimonials</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit magna vel dolor dapibus, eu tempor velit convallis. Integer eget dolor massa. Nam eget lacus id sapien sodales bibendum vitae a elit."</p>
                                    <p class="card-text"><small class="text-muted">Client 1</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit magna vel dolor dapibus, eu tempor velit convallis. Integer eget dolor massa. Nam eget lacus id sapien sodales bibendum vitae a elit."</p>
                                    <p class="card-text"><small class="text-muted">Client 2</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <div class="card-body">

                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit magna vel dolor dapibus, eu tempor velit convallis. Integer eget dolor massa. Nam eget lacus id sapien sodales bibendum vitae a elit."</p>
                                    <p class="card-text"><small class="text-muted">Client 3</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project