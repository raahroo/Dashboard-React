import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickRemove } from '../../actions';

class Button extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			showDelete: false,
			userId: this.props.userId,
		};
		this.showDelete = this.showDelete.bind(this);
		this.hideDelete = this.hideDelete.bind(this);
		this.getId = this.getId.bind(this);
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

	getId(){
		let cardId = ReactDOM.findDOMNode(this).parentNode.getAttribute('id');
		return cardId;
	}

	render(){
		const { clickRemove } = this.props;
		return(
			<span className="Button" onMouseOver={this.showDelete} onMouseOut={this.hideDelete}>
				{ this.state.showDelete &&
                    <Tooltip placement="top" className="in" id="tooltip-right">
                        Remove user
                    </Tooltip>
				}
				<button className="Button__remove" onClick={() => clickRemove(this.getId())}>╳</button> 
			</span>
		);
	}
}

const mapStateToProps = store =>({
	userId: store.userState.userId,
});


const mapDispatchToProps = dispatch =>
	bindActionCreators({ clickRemove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Button);