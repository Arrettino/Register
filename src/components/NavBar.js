import React, { Component } from 'react'
import './styles/NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <img className='logo' 
                    src="https://firebasestorage.googleapis.com/v0/b/vluxi-owl.appspot.com/o/VLUXI_icon.svg?alt=media&token=1ad954d8-b1e3-4ef3-a4d4-bee12ed57912" 
                    height="63.3px" 
                    alt="Logo vluxi"
                />
            </div>
        )
    }
}

export default NavBar
