import React from 'react';

class IncreaseButton extends React.Component {
    IncreaseFunc = this.props.IncreaseFunc;

    render() {
        return (
            <input type="button" value="inc" onClick={this.IncreaseFunc} />
        )
    }
}

export default IncreaseButton;