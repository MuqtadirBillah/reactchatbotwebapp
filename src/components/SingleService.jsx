import React from "react";

function SingleService(props){
    return(
        <div className="singleService">
            <div className="card">
                <img src={"assets/images/"+props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{props.h}</h5>
                    <p>{props.p}</p>
                    <button type="button" className="btn btn-primary">Learn More...</button>
                </div>
            </div>
        </div>
    );
}

export default SingleService;