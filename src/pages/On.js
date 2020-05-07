import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class On extends Component {
    render() {
        return (
            <div>
                <Link to="/sign-up"><p>Sign up</p></Link>
                <Link to="/login"><p>Log In</p></Link>
            </div>
        )
    }
}

export default On
