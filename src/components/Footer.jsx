import React from "react";
import Newsletter from "./Newsletter";

function Footer(){
    return(
        <div className="footer">
            <Newsletter />
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="fAbout">
                            <h3>About Us</h3>
                            <p>AI Chatbot is one stop solution for your business. Either its customer representative or managing your business. AI Chatbot is one stop solution for your business.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="fContact">
                            <h3>Contact Us</h3>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.228855289766!2d67.08160671483952!3d24.924272484023845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f37c01335e7%3A0xefe73798fd6e59eb!2sIqra%20University%20Gulshan%20Campus!5e0!3m2!1sen!2s!4v1628451737678!5m2!1sen!2s" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;