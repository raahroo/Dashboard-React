import React from 'react';

export default class AddMemberCard extends React.Component{
	render(){
		return(
			<div className="AddMemberCard">
				<span className="AddMemberCard__add">✕</span>
				<div className="Card__text">
					<p className="Card__text__label">{this.props.label}</p>
				</div>
			</div>
		);
	}
}