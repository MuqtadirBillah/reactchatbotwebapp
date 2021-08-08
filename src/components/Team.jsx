import React from "react";

function Team(){
    return(
        <div className="team">
            <h1>Team</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-s-12">
                        <div className="teamMember">
                            <img src="/assets/images/me.png" alt="" />
                            <h5>Muqtadir Billah</h5>
                            <p>Team Member</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-s-12">
                        <div className="teamMember">
                            <img src="/assets/images/ali.jfif" alt="" />
                            <h5>Ali Ghaffar</h5>
                            <p>Team Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;