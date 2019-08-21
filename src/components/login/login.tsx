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
    }
    submit = ()=>{
        console.log("Username : "+this.state.username);
        console.log("Password : "+this.state.password);
    }
    
    render(){
        return(
            <form>
                <label>Username
                    <input type="text" name="username" onChange = {e=>{this.setState({username : e.target.value})}}/>
                </label>
                <br></br>
                <label>password
                    <input type="password" name="password" onChange = {e=>{this.setState({password : e.target.value})}}/>
                </label>
                <br></br>
                <button type="button" onClick={this.submit}>Submit</button>
            </form>
        );
    }
}

export default Login