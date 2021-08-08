import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Chat(){

    var [but, setBut] = useState("hide");
    var [user, setUser] = useState("Person1");
    var [al, setAl] = useState("aLeft");
    var [alRal, setAr] = useState("aRight");
    var [message, setMessage] = useState("");
    var [messages, setMessages] = useState([]);
    var [botRes, setBotRes] = useState("");
    var [style, setStyle] = useState("");

    var  i = ()=>{
        return(
            <i class="far fa-user"></i>
        );
    };


    function olick(){
        console.log("working");
        if(but==="hide"){
            setBut("show")
        }
        else{
            setBut("hide");
        }
    }

    axios.get("http://localhost:5000/")
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log("Axios working");
    });

    function post(){
        messages.push({
            user: "User",
            message: message,
            align: "aLeft",
            style: "userStyle"
        });
        // axios.post('http://localhost:5000/bot', {message}
        axios.post('https://chatbot-flask-api-web-app.herokuapp.com/response', {message}
        )
        .then(function (response) {
            messages.push({
                user: "Bot",
                message: response.data,
                align: "aRight",
                style: "botStyle"
            });
            console.log(messages);
            console.log(response.data);
            setMessage("");
            setBotRes(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return(
        <div className="chat">
            <button onClick={olick} className="chatColl">Chat</button>
            <div className="chatBox" className={but}>
                <div className="messages" display="none">

                    {messages.map(({user, message, align, style, index})=>{     
                        console.log(user+"asdsad"+message);   
                        return(                
                            <div className={align}>
                                <h6>{user}:</h6><div className="chatDiv"><p className={style}><span>{message}</span></p></div>
                            </div>
                        );
                    })}
                    <p>{style}</p>
                    {/* <p className=" " className={al}>{i}{user}: sadsadsad</p>
                    <p className=" " className="aRight">Bot: sadsasdfsdfde</p> */}
                </div>
                
                <div className="messageControls">
                    <input type="text" onKeyPress={(event)=>event.key==="Enter" ? post() : console.log("Enter not pressed")} onChange={(e)=>{setMessage(e.target.value)}} id="inn" className="messageIn" placeholder="write you message" value={message} />
                    <button onClick={post} className="messageSend" a href="#inn">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;