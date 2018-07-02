export const clickRemove = value => ({
	type: 'CLICK_REMOVE_USER',
	userId: value
});

export const clickAdd = value => ({
	type: 'CLICK_ADD_USER',
	userName: value
});