import React from 'react';

export default class Home extends React.Component{
    render(){
        return(
            <div className="Home container-fluid">
                <div className="Home__box">
                    <h1 className="Home__title">DashApp</h1>
                    <p className="Home__subtitle">a DevOps Dashboard</p>
                </div>
            </div>
        );
    }

}