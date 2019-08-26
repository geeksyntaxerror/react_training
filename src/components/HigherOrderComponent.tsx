import React from 'react';


interface MyState{
    contacts : string []
}
const HigherOrderComponent = (OriginalComponent: any) => {

    class NewComponent extends React.Component<any,MyState> {
        constructor(props: any) {
            super(props);

            this.state = {
                contacts: []
            }
        }
        componentDidMount() {
            fetch('http://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        contacts: data
                    })
                })
        }


        render() {
            return <OriginalComponent contacts = {this.state.contacts}/>
        }
    }
    return NewComponent;
};

export default HigherOrderComponent;