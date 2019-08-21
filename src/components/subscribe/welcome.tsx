import React, { Component } from 'react'
import "./welcome.css"

interface Props {

}
interface MyState {
    message: string;
    button: string;
    isHover: boolean;
    boxActive: boolean;
    boxMessage : string;
}


class Welcome extends Component<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: 'Welcome Visitor',
            button: 'Subscribe',
            isHover: false,
            boxActive: true,
            boxMessage : "Remove Box"
        }
    }

    render() {
        return (
            <div>
                {this.state.boxActive && <div className="box"><h1>{this.state.message}</h1></div>}
                <button className={this.state.isHover ? "btn btn-primary" : "btn btn-success"}
                    onClick={this.changeMessage}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}>{this.state.button}</button>
                <button className = "btn btn-primary"onClick={this.box}>{this.state.boxMessage}</button>
            </div>
        );
    }

    hoverOn = () => {
        this.setState({
            isHover: true
        });
    }

    hoverOff = () => {
        this.setState({
            isHover: false
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

    box = () => {
        if (this.state.boxActive == true) {
            this.setState({
                boxActive: false,
                boxMessage : "Remove Box"
            });
        }
        else {
            this.setState({
                boxActive: true,
                boxMessage : "Add Box"
            });
        }
    }
}


export default Welcome;