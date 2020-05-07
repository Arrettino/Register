import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
             <Link to=''> 
                <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/VLUXI_icon.svg?alt=media&token=1ad954d8-b1e3-4ef3-a4d4-bee12ed57912" height="63.3px" alt="Logo vluxi"/>
            </Link>
                <h1>WELCOME</h1>
            </div>
        )
    }
}

export default Home
