import React from 'react';

class Modal extends React.Component {
    render (props) {

        let modal1 = this.props.show ? (
            <div className="modal">
             <img className="modalLogo" src='../../../dist/images/logoHeader.png' />
             <br></br>
            Are you 21 or older?
            <br></br>
                <input type="button" className="modalButton"
                onClick={this.props.showModal}
                value="Yes" />
                <input type="button" className="modalButton"
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