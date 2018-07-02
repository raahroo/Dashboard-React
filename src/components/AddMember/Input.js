import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickAdd } from '../../actions';
import InputList from './InputList';

class InputAddMember extends React.Component {

	constructor(props){
		super(props);
		this.state= {
			filterUsers: this.props.users,
			hasNoUser: false,
			userName: this.props.userName,
			hasNoTeam: this.props.users.length === 0,
			inputHasValue: false,
		};
		this.filterUser = this.filterUser.bind(this);
		this.getName = this.getName.bind(this);

	}

	filterUser(event){
		let valueInput = event.target.value.toLowerCase();
		let newUsers = this.props.users;    
		let filterItems = newUsers.filter(item => item.username.toLowerCase().includes(valueInput));
		this.setState({ filterUsers: filterItems });

		if(filterItems.length === 0){
			this.setState({ hasNoUser: true });
		} else {
			this.setState({ hasNoUser: false });
		}
    
		if(event.target.value.length > 0){
			this.setState({
				inputHasValue: true,
			});
		} else {
			this.setState({
				inputHasValue: false,
			});
		}

	}

	getName(){
		let nameFromInput = document.getElementById('usernameInput').value;
		return nameFromInput;
	}

	render(){
		const { clickAdd } = this.props;     
		let Input = document.getElementById('usernameInput');  

		return(
			<div className="InputAddMember">
				<div>
					<input id="usernameInput" className="InputAddMember__input" type="text" placeholder="Client" onChange={this.filterUser}/>
				</div>

				{  this.state.hasNoTeam && !this.state.inputHasValue &&
                <div>
                	<p id ="no-team-message" className="InputAddMember__noTeam">The team list is empty.</p>
                </div>
				}

				{
					this.state.hasNoUser && Input.value !== 0 && Input.value !== null && Input.value !== '' && 
                    <div>
                    	<p id="added-message" className="InputAddMember__added">User added successfully!</p>
                    	<p id="notFound-message" className="InputAddMember__notFound">User not found.</p>
                    	<p id="notFound-message-2" className="InputAddMember__team">Maybe she/he is not yet in your <button className="InputAddMember__action" onClick={() => clickAdd(this.getName())}>team?</button></p>
                    </div>
				}

				{ !this.state.hasNoUser && 
                	<InputList users={ this.state.filterUsers }/> 
				}

			</div>
		);
	}
}

const mapStateToProps = store =>({
	userName: store.userState.userName,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ clickAdd }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (InputAddMember);