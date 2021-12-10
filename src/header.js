import React from 'react';
import {ReactComponent as Logo} from './assets/svg/logo.svg'
import {ReactComponent as Msg} from './assets/svg/message.svg'
import './styles.scss'

const Header = () => {
    return (

        <div className="header">

            <div className="logoA"> <Logo className = 'logo' /> </div>

            <div className="navigate">
                <li><a href="#">Dashboard</a></li>       
                <li><a href="#">Staff</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Quizzes</a></li>
                <li><a href="#">Admins</a></li>
                <li><a href="#">Settings</a></li>
            </div>

            <div className="message">
                <Msg className = 'msg' />
            </div>

        </div>

    );
}

export default Header;
