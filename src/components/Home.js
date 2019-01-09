import React from 'react'
import Partners from './Partners';
import '../myStyles.scss';

class Home extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    backgroundImage:  "url('../../dist/images/warehouse-led-lighting.jpg')",
  }
}
    render(props) {
        return (
            <div className="Home"  style={{backgroundImage: this.state.backgroundImage}}>
              <img className="logo" alt="header" src='../../dist/images/logoHeader.png' />
                <div className="goal">
                   <h1> MISSION</h1>
                     <p className="mission">
             Organic Extractions Enterprises was created to cultivate among the 
             finest cannabis products for discerning consumers. Our 
             products are distributed to high-end retail locations throughout
             Southern California and direct to consumers through our online store.
                    </p>
                   <p className="mission">
             While we are doing are best to meet increasing demand, our mission will always
             be to continue providing products at the high-standard we have set. We are currently
             working with our suppliers to provide more of the products you love. The best way
             to purchase Organic Extractions products is directy from our website.
                   </p>
                </div>
               < Partners />
             </div>
        )
    }
}

export default Home;