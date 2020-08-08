import React from 'react';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    IncreaseFunc = (e) => {
        this.setState((state, props) => ({
            count: this.state.count + 1
        }));
    }

    DecreaseFunc = (e) => {
        this.setState((state, props) => ({
            count: this.state.count - 1
        }));
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <IncreaseButton IncreaseFunc={this.IncreaseFunc} />
                <DecreaseButton DecreaseFunc={this.DecreaseFunc} />
            </div>
        );
    }
};

export default Counter;