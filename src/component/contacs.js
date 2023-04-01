import React from 'react'

function Contacts() {
    return (
        <div>


            <section id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Contact Me</h2>
                            <hr class="my-4" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Name" id="name" required="required" data-validation-required-message="Please enter your name." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input type="email" class="form-control" placeholder="Email Address" id="email" required="required" data-validation-required-message="Please enter your email address." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea rows="5" class="form-control" placeholder="Message" id="message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <br />
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contacts