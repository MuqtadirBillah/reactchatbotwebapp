import React from "react";

function Intro(){
    console.log("public "+process.env.PUBLIC_URL)
    return(
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="introText col-lg-6 col-md-6 col-sm-12">
                        <h1>WHERE WE MEETS YOUR EXPECTIONS</h1>
                        <h5>AI Chatbot is one stop solution for your business. Either its customer representative or managing your business. AI Chatbot is one stop solution for your business.</h5>
                        <button className="introBut">Chat with us</button>
                    </div>
                    <div className="introImg col-lg-6 col-md-6 col-sm-12">
                    <img src="/introImg.png" width="400px" alt="Intro Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;