import React from "react";
import SingleService from "./SingleService";

function Services(){
    return(
        <div className="services">
            <h1>Services</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <SingleService h="Be quick" img="quick.png" p="Automate responses to commonly asked questions — with chatbot software, any time of day or night." />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <SingleService h="Be proactive" img="software.png" p="Chatbot software lets you gather information from visitors and connect them with the right people, right away." />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <SingleService h="Be real" img="bereal.png" p="Seamlessly handover conversations from chatbots to human agents for more complex or sensitive tasks." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;