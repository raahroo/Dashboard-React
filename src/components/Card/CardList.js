import React from 'react';
import Card from '../Card';
import { isMobile } from 'react-device-detect';

export default class CardList extends React.Component {

	constructor(props){
		super(props);
		this.state={
			userState: this.props.users
		};
	}

	componentDidMount(){
		if(isMobile) { //In the resize is not recognized, you must use devices or the inspector.
			let firstChild = document.getElementById('0');
			firstChild.style.margin = '60px 0 0 0';
			firstChild.classList.remove('col-xs-offset-12');
			firstChild.classList.remove('col-sm-offset-6');
		} else {
			let firstChild = document.getElementById('0');
			firstChild.classList.add('col-xs-offset-12');
			firstChild.classList.add('col-sm-offset-6');
			firstChild.style.margin = null;
		}
		
		if (this.props.users.length !==0 && isMobile){
			let firstChild = document.getElementById('0');
			firstChild.style.margin = '60px 0 0 0';
		}
	}

	componentDidUpdate(){
		if (this.props.users.length !==0 && isMobile ){
			let firstChild = document.getElementById('0');
			firstChild.style.margin = '60px 0 0 0';
			firstChild.classList.remove('col-xs-offset-12');
			firstChild.classList.remove('col-sm-offset-6');
		} else if (this.props.users.length !==0 && !isMobile ) {
			let firstChild = document.getElementById('0');
			firstChild.classList.add('col-xs-offset-12');
			firstChild.classList.add('col-sm-offset-6');
		}
	}

	render(){
		return(
			<div className="CardList" id="cardlist"> 
				{
					this.props.users.map((item, index) => 
						<Card id={index} key={index} label={item.role} name={item.username} />
					)}
			</div>
		);
	}
}
