import { POST_TYPES } from '../actions/postAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    posts: [],
    comments:[],
    result: 0,
    page: 2
}

const postReducer = (state = initialState, action) => {
    switch (action.type){
        
        case POST_TYPES.DELETE_POST:
            return {
                ...state,
                posts: DeleteData(state.posts, action.payload._id)
            };
        default:
            return state;
    }
}

export default postReducer