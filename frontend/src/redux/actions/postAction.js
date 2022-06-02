import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { postDataAPI, getDataAPI, patchDataAPI, deleteDataAPI } from '../../utils/fetchData'
import { createNotify, removeNotify } from './notifyAction'

export const POST_TYPES = {
    
    DELETE_POST: 'DELETE_POST'
}

export const likePost = ({ post, auth, socket }) => async (dispatch) => {
    const newPost = { ...post, likes: [...post.likes, auth.user] }
    dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost })

    socket.emit('likePost', newPost)

    try {
        await patchDataAPI(`post/${post._id}/like`, null, auth.token)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'like your post.',
            recipients: [post.user._id],
            url: `/post/${post._id}`,
            content: post.content,
            image: post.images[0].url
        }

        dispatch(createNotify({ msg, auth, socket }))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const unLikePost = ({ post, auth, socket }) => async (dispatch) => {
    const newPost = { ...post, likes: post.likes.filter(like => like._id !== auth.user._id) }
    dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost })

    socket.emit('unLikePost', newPost)

    try {
        await patchDataAPI(`post/${post._id}/unlike`, null, auth.token)

        // Notify
        const msg = {
            id: auth.user._id,
            text: 'like your post.',
            recipients: [post.user._id],
            url: `/post/${post._id}`,
        }
        dispatch(removeNotify({ msg, auth, socket }))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
export const deletePost = ({ post, auth, socket }) => async (dispatch) => {
    dispatch({ type: POST_TYPES.DELETE_POST, payload: post })

    try {
        const res = await deleteDataAPI(`post/${post._id}`, auth.token)

        // Notify
        const msg = {
            id: post._id,
            text: 'added a new post.',
            recipients: res.data.newPost.user.followers,
            url: `/post/${post._id}`,
        }
        dispatch(removeNotify({ msg, auth, socket }))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
