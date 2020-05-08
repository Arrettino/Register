import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import './styles/On.css'

export class On extends Component {
    render() {
        return ( 
            <React.Fragment>
                <NavBar/>
                <div className="Background">
                    <div className="Center">
                        <Link to="/sign-up" className="register">
                            <div className="container">
                                <img 
                                    src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/black.svg?alt=media&token=81c28077-c153-4d46-afa7-c196ade9a21d" 
                                    alt="Login icon"
                                    className="icons"
                                />
                                <p className="register">Sign up</p>
                            </div>
                        </Link>
                        <Link to="/login" className="register">
                            <div className="container">
                                <img 
                                    className="icons"
                                    src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/web.svg?alt=media&token=f1246a0c-b63f-4ecb-a782-85ea7a0f555f" 
                                    alt="Login icon"                             
                                />
                                <p >Log In</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default On
