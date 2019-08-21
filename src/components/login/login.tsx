import React from 'react'


interface MyState{
    username : string;
    password : string;
}
class Login extends React.Component<{},MyState>{
    constructor(props : {}){
        super(props);
        this.state = {
            username : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event : any){
        if(event.target.name == 'username'){
            this.setState({
                username : event.target.value
            })
        }
        else{
            this.setState({
                password : event.target.value
            });
        }
    }
    submit = ()=>{
        console.log("Username : "+this.state.username);
        console.log("Password : "+this.state.password);
    }
    
    render(){
        return(
            <form>
                <label>Username
                    <input type="text" name="username" onChange = {this.handleChange}/>
                </label>
                <br></br>
                <label>password
                    <input type="password" name="password" onChange = {this.handleChange}/>
                </label>
                <br></br>
                <button type="button" onClick={this.submit}>Submit</button>
            </form>
        );
    }
}

export default Login