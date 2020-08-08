import React from 'react';

class DecreaseButton extends React.Component {
    DecreaseFunc = this.props.DecreaseFunc;

    render() {
        return (
            <input type="button" value="dec" onClick={this.DecreaseFunc} />
        )
    }
}

export default DecreaseButton;