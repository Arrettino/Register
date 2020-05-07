import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './styles/SocialBar.css'
import firebase from "firebase"

export class SocialBar extends Component {
    state={
        redirect:false,
    }
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => this.setState({ redirect: true }))
            .catch(error => alert(error))
    }
    facebook(){
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then((result) => this.setState({ redirect: true }))
        .catch(function(error) {
            // Handle Errors here.
            alert(error)
          });
    }
    github(){
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => this.setState({ redirect: true }))
        .catch(function(error) {
            alert(error)
          });
    }
    render() {
        const { redirect } = this.state;
        console.log(this)
        this.handleAuth=this.handleAuth.bind(this)
        this.facebook=this.facebook.bind(this)
        this.github=this.github.bind(this)
        if (redirect) {
          return <Redirect to='/home'/>;
        }
        return (
            <div className='social__bar'>
                <div onClick={this.handleAuth}>
                    <img  src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/Gmail_icon.svg?alt=media&token=8b95dccd-8944-4b67-855f-70fcb782017c" width="70px" alt="gmail"/>
                </div>
                
                <div onClick={this.facebook} to='/' className='icon' >
                    <img  src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/Facebook_icon.svg?alt=media&token=b5c217d5-785e-4543-9988-da2c7bbda6b8" width="70px" alt="gmail"/>
                </div>
                
                <div onClick={this.github} className='icon' >
                    <img  src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/GitHub_icon.svg?alt=media&token=9a224635-cc4a-48e7-a459-e87ee86bb2ae" width="70px" alt="gmail"/>
                </div>
            </div>
        )
    }
}

export default SocialBar
