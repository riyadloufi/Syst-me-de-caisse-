const stateInitial = {
    Catigorie: [
        { id: 1, name: "beverages", img: '/beverages.jpg' },
        { id: 2, name: "fruits", img: '/fruits.jpg' },
        { id: 3, name: "desserts", img: '/desserts.jpg' },
        { id: 4, name: "soups", img: '/soups.jpg' },
        { id: 5, name: "meat", img: '/meat.jpg' },
        { id: 6, name: "bread", img: '/bread.jpg' },
    ],
    items: [
        { id: 1, Catigorie: "desserts", name: "Pizza", img: '/pizza.jpg', price: 30 },
        { id: 2, Catigorie: "desserts", name: "brownies", img: '/brownies.jpg', price: 19 },
        { id: 3, Catigorie: "beverages", name: "expresso", img: '/expresso.jpg', price: 9 },
        { id: 4, Catigorie: "beverages", name: "pepsi", img: '/pepsi.jpg', price: 7 },
    ],
    itemSelected: [
    ],
};

export default function Reducer(state = stateInitial, action) {
    switch (action.type) {
        case 'ADD_ITEM_SELECTED':
            if (state.itemSelected.some(item => item.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                itemSelected: [...state.itemSelected, action.payload],
            };
        case 'DELETE_ITEM_SELECTED':
            return{
                ...state,
                itemSelected : state.itemSelected.filter((item) => item.id !== action.payload.id)
                
            }
    
        default:
            return state;
    }
}
