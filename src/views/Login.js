import React from 'react';
import LoginForm from '../forms/LoginForm';

export default class LoginPage extends React.Component{
    render(){
        return(
            <div className="Login container-fluid">
                <div className="Login__box">
                    <h1 className="Login__title">Login</h1>
                    <LoginForm />
                </div>
            </div>
        );
    }

}