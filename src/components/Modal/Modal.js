import React from 'react';

class Modal extends React.Component {
    render (props) {

        let modal1 = this.props.show ? (
            <div className="modal">
             <img className="aboutLogo" src='../../../dist/images/logoHeader.png' />
            Are you 21 or older?
                <input type="button"
                onClick={this.props.showModal}
                value="Yes" />
                <input type="button"
                onClick={this.props.handleClick}
                value="No" />
            </div>
        ) : (
            <div></div>
        )
        return (
           <div> {modal1} </div>
        );
    }
}

export default Modal;