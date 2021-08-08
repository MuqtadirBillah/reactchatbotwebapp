import React, { useState } from "react";
import axios from "axios";

function Newsletter(){

    var [email, setEmail] = useState(""); 
    var [emailStatus, setEmailStatus] = useState("");

    function subscribe(){
        console.log(email);
        // axios.post('http://localhost:5000/newsletter', {email}
        axios.post('http://192.168.0.110:5000/newsletter', {email}
        )
        .then(function (response) {
            console.log(response.data);
            if(response.data==="OK"){
                setEmail("");
                console.log("OK");
                setEmailStatus("Successfully subscribed to our newsletter");
            }
            else{
                console.log("NOT OK");
                setEmailStatus("Sorry something went wrong");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className="newsletter">
            <h1>Subscribe to Our Newsletter</h1>
            <div className="container=fluid">
                <div className="row justify-content-center">
                    <div className="newsIn col-lg-8 col-md-12 col-sm-12">
                        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value); setEmailStatus("")}} />
                    </div>
                    <div className="newSubBut col-lg-4 col-md-4 col-sm-12">
                        <button className="btn btn-primary" onClick={subscribe} >Subscribe</button>
                    </div>
                </div>
            </div>
            <h5>{emailStatus}</h5>
            <hr className="wHr" />
        </div>
    );
}

export default Newsletter;