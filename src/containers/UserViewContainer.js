import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/Card/CardList';
import AddMember from '../components/AddMember';

class TeamViewContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			open: false,
		};
		this.showAll = this.showAll.bind(this);
		this.showLess = this.showLess.bind(this);
	}

	showAll() {
		this.setState({
			open: true
		});
	
	}

    
	showLess() {
		this.setState({
			open: false
		});
	}

	render(){
      
		return(
			<div id="teamView" className={this.state.open ? 'TeamView--opened container' : 'TeamView container'} >
				<AddMember users={this.props.userList} label="Add a User" />
				<CardList users={this.props.userList}/>
				{/* <p id="showall" className="TeamView__showall" onClick={this.showAll}>Show all <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></p>
				<p id="showless" className="TeamView__showless" onClick={this.showLess}>Show Less <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span></p> */}
			</div>
		);
	}
}

const mapStateToProps = store => ({
	userList: store.userState.userList,
});

export default connect(mapStateToProps)(TeamViewContainer);