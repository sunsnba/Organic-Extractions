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
            Organic Extractions Enterprises was created to cultivate among the 
            finest cannabis products for discerning consumers. Our 
            products are distributed to high-end retail locations throughout
            Southern California. 
              </p>
              </div>
        )
    }
}

export default About