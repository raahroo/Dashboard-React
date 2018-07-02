import React from 'react';
import { Col } from 'react-bootstrap';
import Avatar from './avatar-default.png';
import Button from './Button';

export default class Card extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			showDelete: false
		};
		this.showDelete = this.showDelete.bind(this);
		this.hideDelete = this.hideDelete.bind(this);
	}

	showDelete(){
		this.setState({
			showDelete: true
		});
	}

	hideDelete(){
		this.setState({
			showDelete: false
		});
	}

	render(){
		return(
			<Col xs={12} sm={this.props.small ? 12 : 6}  
				id={this.props.id}
				className={this.props.small ? 'Card--small' : 'Card'} 
				onMouseOver={this.showDelete} onMouseOut={this.hideDelete}>
				{ this.state.showDelete && !this.props.small ?
					<Button />
					:
					<img src={Avatar} className="Card__avatar" alt="avatar" />
				}

				{this.props.small ?
					<div className="Card__text">
						<p className="Card__text__name">{this.props.name}</p>
						<p className="Card__text__label" dangerouslySetInnerHTML={{__html: this.props.label }} />
					</div>:
					<div className="Card__text">
						<p className="Card__text__label" dangerouslySetInnerHTML={{__html: this.props.label }} />
						<p className="Card__text__name">{this.props.name}</p>
					</div>
				}
			</Col>
		);
	}
}