import React from 'react';
import Card from '../Card';

export default class InputList extends React.Component {
	render(){
		return(
			<div className="InputList">
				{
					this.props.users.length !==0 &&
                <div className="InputList__list">
                	{
                		this.props.users.map((item, index) => 
                			<Card key={index} name={item.username} label={item.role} small />
                		)}
                </div>
				}
               
			</div>
		);
	}
}