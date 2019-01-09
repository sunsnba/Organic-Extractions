import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div className="about">
              <h3 className="aboutHeader">WELCOME</h3>
                <h1 className="aboutHeader">About Us</h1>
                  <img className="aboutLogo" src='../../dist/images/logoHeader.png' />
                    <p className="aboutInfo">
            Through long-lasting personal relationships with many of the top cultivators in California,
            Organic Extractions has access to some of the highest quality flowers in the world.
            Combining these excellent raw materials with years of expeirence, knowledge and a 
            cutting edge extraction facility, we are able to create choice butters, oil and wax.
                    </p>
                    <p className="aboutInfo">
            Organic Extractions was created in 2018 when Alexander Coombs realized there was a lack
            of ultra-premium product in the US market. Since half his year is spent in Los Angeles he
            decided to take on the task to fill this market gap. As a self capitalized company Organic Extractions 
            does not compromise quality because of pressure from investors or board members. 
            We will only scale to the extent that we can continue providing the products are customers know,
            love and can't find elsewhere. This competitive advantage has allowed us to corner the a niche of
            the marketplace.      
                    </p>
                    <p className="aboutInfo">
            We are continually evaluating new partners, extraction methods and the latest technologies to ensure
            the highest quality products can meet our demand. While our Frogtown office do not have a retail location,
            you can find our products at one of the stores for our retail partners such as MedMen, MMD or Jungle Boys. 
            It's also possible to order products online with delivery via Eaze. Please enjoy responsibly.       
                    </p>
              </div>
        )
    }
}

export default About