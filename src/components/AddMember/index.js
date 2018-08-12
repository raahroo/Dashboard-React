import React from 'react';
import IpuntAddMember from './Input';
import AddMemberCard from './AddMemberCard';
import { Col, Row } from 'react-bootstrap';

export default class AddMember extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			visible: false,
		};

		this.showAddMember = this.showAddMember.bind(this);
		this.closeAddMember = this.closeAddMember.bind(this);    
	}

	showAddMember(){
		this.setState({
			visible: true
		});
	}

	closeAddMember(){
		this.setState({
			visible: false
		});
	}

	render(){
		return(
			<div className="AddMember">
				<Col xs={12} sm={12}>
					<Row className="AddMember__content" onClick={this.showAddMember}>
						{ this.state.visible ?   
							<IpuntAddMember users={this.props.users} /> :
							<AddMemberCard label="Add a new user for this Dashboard" /> 
						}
					</Row>
				</Col>
               
				<button className={this.state.visible ? 'AddMember__close--visible': 'AddMember__close' } onClick={this.closeAddMember}>╳</button>
			</div>
		);
	}
}