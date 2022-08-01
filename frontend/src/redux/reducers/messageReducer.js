import { MESS_TYPES } from '../actions/messageAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    users: [],
    resultUsers: 0,
    data: [],
    firstLoad: false
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        
        
        case MESS_TYPES.GET_MESSAGES:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        
        default:
            return state;
    }
}

export default messageReducer;