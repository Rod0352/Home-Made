import React from "react";

function About() {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={require(`../../assets/About/AboutImg.jpg`)}
                        alt="About"
                    />    </div>
                <div className="col-md-8">
                    <div className="card-body text-center">
                        <h1 className="card-title">About</h1>
                        <br></br>
                        <br></br>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}

export default About;