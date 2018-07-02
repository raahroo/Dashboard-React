import userData from '../data/data.json';

const initialState = {
	userList: userData,
	userId: '',
	userName: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'CLICK_REMOVE_USER':
		let Users = state.userList;
		let currentId = Number(action.userId); //some day we will need to convert string into number XD;

		let updateUsers = Users.filter((item, index) => index !== currentId);

		return {
			...state,
			userList: updateUsers,
		};
	case 'CLICK_ADD_USER':
		Users = state.userList;
		let currentName = action.userName;
		let hideMessage = document.getElementById('notFound-message');
		let hideMessage2 = document.getElementById('notFound-message-2');
		let showMessage = document.getElementById('added-message');
            
		hideMessage.style.display = 'none';
		hideMessage2.style.display = 'none';
		showMessage.style.display = 'block';

		let newName = {
			username: currentName,
			role: 'External member<font color="#ff8f1d">*</font>',
			picture: 'avatar-default.png',
			id: Users.length + 1  // Auto Increment ID
		};

		let addUser =  Users.push(newName);    
		return {
			...state,
			userName: addUser,
			userList: Users,
		};
	default:
		return state;
	}
};