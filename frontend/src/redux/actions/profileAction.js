import { GLOBALTYPES, DeleteData } from './globalTypes'
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
import { createNotify, removeNotify } from '../actions/notifyAction'


export const PROFILE_TYPES = {
    
    FOLLOW: 'FOLLOW',

}





export const follow = ({users, user, auth, socket}) => async (dispatch) => {
    let newUser;
    
    if(users.every(item => item._id !== user._id)){
        newUser = {...user, followers: [...user.followers, auth.user]}
    }else{
        users.forEach(item => {
            if(item._id === user._id){
                newUser = {...item, followers: [...item.followers, auth.user]}
            }
        })
    }

    dispatch({ type: PROFILE_TYPES.FOLLOW, payload: newUser })

    dispatch({
        type: GLOBALTYPES.AUTH, 
        payload: {
            ...auth,
            user: {...auth.user, following: [...auth.user.following, newUser]}
        }
    })

