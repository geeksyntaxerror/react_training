import React, { Component } from 'react'

interface Props {

}
interface MyState {
    message: string;
    button: string;
    isHover : boolean;
}


class Welcome extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor',
            button: 'Subscribe',
            isHover : false
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className={this.state.isHover ? "btn btn-primary" : "btn btn-success"} 
                onClick={this.changeMessage}
                onMouseEnter = {this.hoverOn}
                onMouseLeave = {this.hoverOff}>{this.state.button}</button>
            </div>
        );
    }

    hoverOn = ()=>{
        this.setState({
            isHover : true
        });
    }

    hoverOff = ()=>{
        this.setState({
            isHover : false
        });
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