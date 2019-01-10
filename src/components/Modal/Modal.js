import React from 'react';

class Modal extends React.Component {
    render (props) {
        return (
            <div className="modal">
            Are you 21 or older?
                <input type="button"
                onClick={this.props.showModal}
                value="Yes" />
                <input type="button"
                onClick={this.props.handleClick}
                value="No" />
            </div>
        )
    }
}

export default Modal;
