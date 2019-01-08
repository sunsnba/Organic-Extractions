import React from 'react'
import '../myStyles.scss';

class Home extends React.Component {
  constructor(props) {
  super(props)

}
    render(props) {
        return (
            <div className="Home">
              <img className="logo" alt="header" src='../../dist/images/logoHeader.png' />
               <h1> MISSION</h1>
               <p className="mission">
             Organic Extractions Enterprises was created to cultivate among the 
             finest cannabis products for discerning consumers. Our 
             products are distributed to high-end retail locations throughout
             Southern California. 
               </p>
               </div>
        )
    }
}

export default Home;