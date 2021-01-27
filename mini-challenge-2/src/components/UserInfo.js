import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    /* Create your two click handlers here.
    One to sign in, one to sign out e.g. 
    handleSignIn(), handleSignOut(). Each one
    should modify the state accordingly. */

    render() {
        return (
            <div className="col-3">
                {/* Use conditional rendering to render a message 
                and a sign in/sign out button here. If isLoggedIn
                is false, render a sign in message and button. If
                isLoggedIn is true, render a welcome message and
                a sign out button */}
            </div>
        )
    }
}

export default UserInfo
