import React, { Component } from 'react'
import './styles/Register-login.css'
import { Redirect } from 'react-router-dom'
import firebase from "firebase"

export class UserInfo extends Component {
    state={
        redirect:false,
    }
    change = e =>{
        this.setState({
            [e.target.name]:e.target.value,
        })
        this.Sign_up=this.Sign_up.bind(this)
    }
    

    
    Sign_up(){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => this.setState({ redirect: true }))

        .catch(function(error) {
            alert (error)
            // ...
          });
        
    }
    
    render() {
        const { redirect } = this.state;
        this.Sign_up=this.Sign_up.bind(this)
        if (redirect) {
            return <Redirect to='/home'/>;
          }
        return (
            <React.Fragment>
                <div className="formulari">
                    <div>
                        <input onChange={this.change}  type="email" placeholder="Email"  name="email"  className="user__info text" value={this.state.email}/>
                    </div>    
                    <div>
                        <input type="password" placeholder="Password" name="password" className="user__info text" onChange={this.change}  value={this.state.password}/>
                    </div>

                    <button onClick={this.Sign_up} className='button'> Sign up</button>

                    
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo
