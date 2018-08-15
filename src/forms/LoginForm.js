import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../server/shared/validations/login';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid){
            this.setState({
                errors
            });
        }
        return isValid;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            console.log("valid");
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    render(){
        const { errors, identifier, password, isLoading } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <TextFieldGroup
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange = {this.onChange}
                />
                 <TextFieldGroup
                    field="password"
                    label="Passoword"
                    value={password}
                    error={errors.password}
                    onChange = {this.onChange}
                />
                <div className="form-group">
                    <button className="btn btn-primary btn-lg"
                        disabled={isLoading}
                    >
                        Login
                    </button>
                </div>
                
            </form>
        );
    }

}