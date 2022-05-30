import { PROFILE_TYPES } from '../actions/profileAction'
import { EditData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    ids: [],
    users: [],
    posts: [],
    result:0
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case PROFILE_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case PROFILE_TYPES.GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            };
        case PROFILE_TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users
            };
        case PROFILE_TYPES.FOLLOW:
            return {
                ...state,
                users: EditData(state.users, action.payload._id, action.payload)
            