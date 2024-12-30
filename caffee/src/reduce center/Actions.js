export const addItemSelected = (item) => ({
    type: 'ADD_ITEM_SELECTED',
    payload: item,
});

export const deleteItemSelected = (item) => ({
    type: 'DELETE_ITEM_SELECTED',
    payload: item,
});