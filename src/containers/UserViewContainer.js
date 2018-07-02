import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/Card/CardList';
import AddMember from '../components/AddMember';
import { isMobile } from 'react-device-detect';

class TeamViewContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			open: false,
		};
		this.showAll = this.showAll.bind(this);
		this.showLess = this.showLess.bind(this);
	}

	componentDidUpdate(){
		let numberOfMembers = this.props.userList.length;
		let closeTeamView = document.getElementById('teamView');
		let showLessCards = document.getElementById('showless');
		let showAllCards = document.getElementById('showall');

		if(isMobile) { 
			if( numberOfMembers  ===  0 || numberOfMembers  === 1){
				showLessCards.style.display = 'none';
				showAllCards.style.display = 'none'; 
			} else if( numberOfMembers <= 2){
				showLessCards.style.display = 'none';
				showAllCards.style.display = 'none'; 
			} 
		} else {
			if( numberOfMembers === 0 || numberOfMembers  ===  1){
				showLessCards.style.display = 'none';
				showAllCards.style.display = 'none';
				closeTeamView.classList.add('closed-length'); 

			} else if ( numberOfMembers ===  2) {
				closeTeamView.classList.remove('closed-length');
				showLessCards.style.display = 'none';
				showAllCards.style.display = 'none';
               
			} else if(numberOfMembers <= 3){
				showLessCards.style.display = 'none';
				showAllCards.style.display = 'none';
				closeTeamView.classList.add('closed');
			} 
		}
	}

	showAll() {
		this.setState({
			open: true
		});

		let showAllCards = document.getElementById('cardlist');
		showAllCards.style.height = 'auto';
		let showLessCards = document.getElementById('showless');
		showLessCards.style.display = 'block';
	}

    
	showLess() {
		this.setState({
			open: false
		});
 
		let showAllCards = document.getElementById('cardlist');
		showAllCards.style.height = null;
		let showLessCards = document.getElementById('showless');
		showAllCards.style.display = null;
		showLessCards.style.display = 'none';
	}

	render(){
      
		return(
			<div id="teamView" className={this.state.open ? 'TeamView--opened container' : 'TeamView container'} >
				<AddMember users={this.props.userList} label="Add a User" />
				<CardList users={this.props.userList}/>
				<p id="showall" className="TeamView__showall" onClick={this.showAll}>Show all <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></p>
				<p id="showless" className="TeamView__showless" onClick={this.showLess}>Show Less <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span></p>
			</div>
		);
	}
}

const mapStateToProps = store => ({
	userList: store.userState.userList,
});

export default connect(mapStateToProps)(TeamViewContainer);