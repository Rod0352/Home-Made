import React from "react";

function About() {
    return (
        <div >
            <h1 className="card-title text-center aaboutTitle">About</h1>
            <div className=" mb-3 about" >
                <div className="row g-0 aboutText">
                    <div className="col-md-3">
                        <img
                            src={require(`../../assets/About/AboutImg.jpg`)}
                            alt="About"
                        />    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <br></br>
                            <br></br>
                            <p className="card-text intro">Hello and welcome! Our team here at 'Home Made' care deeply for our african american community and our initiative is to bring better support to it. Home Made is an application that aims to connect users with black-owned buisness's to help the community thrive. You can view a  buisness by different categories such as food, hygiene, etc. If you are a black-buisness owner yourself please refer to the 'add a buisness' tab to add your buisness to our roster to get some exposer!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;