import React from 'react';
import { Col, Well } from 'react-bootstrap';

export default class DashboardPanel extends React.Component{
    render(){
        return(
            <Col xs={2} className="Dashboard__panel">
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
                <Well>
                    <span className="glyphicon glyphicon-expand" aria-hidden="true"></span> Section
                </Well>
            </Col>

        );
    }

}