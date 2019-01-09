import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div className="about">
            <h3>WELCOME</h3>
            <h1>About Us</h1>
            <img className="aboutLogo" src='../../dist/images/logoHeader.png' />
            <p className="aboutInfo">
            Through long-lasting relationships with many of the top cultivators in California,
            Organic Extractions has access to some of the highest quality flowers in the world.
            Combining these excellent raw materials with years of expeirence, knowledge and a 
            cutting edge extraction facility, we are able to create choice butters, oil and wax.
              </p>
              </div>
        )
    }
}

export default About