import React from 'react';
import { Col, Row, Well } from 'react-bootstrap';
import UserViewContainer from '../containers/UserViewContainer';
import DashboardPanel from '../components/DashboardPanel';

export default class MyAccount extends React.Component{
    render(){
        return(
            <div className="Profile container-fluid">
                <Row>
                    <DashboardPanel/>
                    <Col xs={10} className="Dashboard__content">
                        <h1 className="Dashboard__title">My account</h1>
                        <Col xs={12} md={6}>
                        <Well className="Dashboard__admin"> 
                            <h4><span className="glyphicon glyphicon-user" aria-hidden="true"></span>  
                              Max Mustermann - Admin</h4>
                            <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> e-mail: max.munsterman@devops.com</p>
                            <p><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Settings</p>
                            <p><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span> Change Password</p>
                        </Well>
                        </Col>
                        <Col xs={12} md={6} className="Dashboard__dev">
                            <Well>
                                <h4><span className="glyphicon glyphicon-tasks" aria-hidden="true"></span> Continuous Delivery</h4>
                                <button>Unit Tests</button><button>Infrastructure Tests</button><button>Platform Tests</button>
                            </Well>
                        </Col>
                        <Col xs={12} md={6} className="Dashboard__dev">
                            <Well>
                                <h4><span className="glyphicon glyphicon-tasks" aria-hidden="true"></span> Continuous Deployment</h4>
                                <button>Unit Tests</button><button>Infrastructure Tests</button><button>Platform Tests</button>
                            </Well> 
                        </Col>
                        <Col xs={12} className="Dashboard__devOps">
                            <Well>
                                <h4><span className="glyphicon glyphicon-retweet" aria-hidden="true"></span> DevOps</h4>
                                <button>Deploy</button><button>Monitor</button><button>Manage</button><button>Scale</button>
                            </Well>
                        </Col>
                        <Col xs={12}>
                            <h2>Manage Users</h2>
                            <Well>
                                <UserViewContainer/>
                            </Well>
                        </Col>
                    </Col>
                </Row>
                
            </div>
        );
    }

}