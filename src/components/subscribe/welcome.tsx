import React, { Component } from 'react'

interface Props {

}
interface MyState {
    message: string;
    button: string;
}

class Welcome extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor',
            button: 'Subscribe'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>{this.state.button}</button>
            </div>
        );
    }

    changeMessage = () => {
        if (this.state.message == 'Welcome Visitor') {
            this.setState({
                message: 'Thanks for Subscribing',
                button: 'Subscribed'
            });
        }
        else {
            this.setState({
                message: 'Already Subscribed'
            });
        }

    }
}


export default Welcome;