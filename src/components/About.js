import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>
              <img alt="header" src="../../dist/images/logoHeader.png" className="app-header" />
            <p>
            Organic Extractions was created to cultivate among the 
            finest cannabis products for discerning consumers. 
              </p>
              </div>
        )
    }
}

export default About