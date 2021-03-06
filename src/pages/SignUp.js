import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/SignUp.css'
import SocialBar from '../components/SocialBar'
import Register  from '../components/Register'



export class SignUp extends Component {
    render() {
        return (
            <div className="center">
                <div className="Register_">
                    <Link to='/'> 
                        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/VLUXI_icon.svg?alt=media&token=1ad954d8-b1e3-4ef3-a4d4-bee12ed57912" height="63.3px" alt="Logo vluxi"/>
                    </Link>
                    <SocialBar/>
                    <Register/>
                    <div class="sign_in">
                        <p >Already have login and password?</p> 
                        <Link to="/login"><p>Log In</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
