import React from 'react'

function About() {
    return (
        <div>
            <section id="education" class="education">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="mb-4">Education</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Degree</th>
                                            <th scope="col">Institution</th>
                                            <th scope="col">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bachelor of Computer Science</td>
                                            <td>ABC University</td>
                                            <td>2015-2019</td>
                                        </tr>
                                        <tr>
                                            <td>Master of Computer Science</td>
                                            <td>XYZ University</td>
                                            <td>2019-2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="skills">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="mb-4">Skills &amp; Expertise</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">Web Design</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">Front-end Development</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">Back-end Development</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">UI/UX Design</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">Database Design</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="skill-progress mb-4">
                                <h4 class="skill-title">Project Management</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About