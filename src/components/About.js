import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>
              <img alt="header" src="../../dist/images/logoHeader.png" className="app-header" />
            <p>
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