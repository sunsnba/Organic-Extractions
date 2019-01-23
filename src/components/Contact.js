import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
      super(props)

      this.state = {itemText: ''}
    }  
  // anything that affects the form should be an input tag.

  render() {
  return (
        <div className="contact" >
          <h3>
            Say Hello 
          </h3>
            <h1>Contact</h1>
              <h3>Los Angeles Office (Frogtown)</h3>
                <p>Call Us: 1-800-555-1234</p>
                <p>2769 Fruitdale Street</p>
                <p>Los Angeles, CA 90039</p>
                <p>United States</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.5351322708834!2d-118.25646738478363!3d34.10704748059101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0d5384921d7%3A0x965e9476c202bf17!2s2769+Fruitdale+St%2C+Los+Angeles%2C+CA+90039!5e0!3m2!1sen!2sus!4v1547223675228" width="500" height="350"></iframe>
                    <h3 className="emailRequest">To receive exciting Organic Extractions updates please enter your email address below:</h3>
                    <form onSubmit={event => this.onSubmit(event)}>
                      <input type='text' value={this.state.itemText} onChange={event => this.onInputChange(event.target.value)}/>
                      <input type='submit' />
                    </form>
                      <br/>
                      <br/>
        </div>
    )
}

onInputChange(itemText) {
  this.setState({itemText})
  }

onSubmit(event) {
  console.log('hi')
  event.preventDefault() 
  // w/out this event.preventDefault the app will immediately clear the list
  //this.props.updateList(this.state.itemText);
  this.setState({itemText: ''});
  }
}

export default Contact;

