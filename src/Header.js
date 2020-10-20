import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <PersonIcon/>
            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"/>
            <ForumIcon/>
           
        </div>
    )
}

export default Header