import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const InputComment = ({children, post, onReply, setOnReply}) => {
    const [content, setContent] = useState('')

    

        setContent('')
        
        const newComment = {
            content,
            likes: [],
            user: auth.user,
            createdAt: new Date().toISOString(),
            reply: onReply && onReply.commentId,
            tag: onReply && onReply.user
        }
        
        dispatch(createComment({post, newComment, auth, socket}))

        if(setOnReply) return setOnReply(false);
    }

    return (
        <form className="card-footer comment_input" onSubmit={handleSubmit} >
            {children}
            <input type="text" placeholder="Add your comments..."
            value={content} onChange={e => setContent(e.target.value)}
            style={{
                filter: theme ? 'invert(1)' : 'invert(0)',
                color: theme ? 'white' : '#111',
                background: theme ? 'rgba(0,0,0,.03)' : '',
            }} />

            <Icons setContent={setContent} content={content} theme={theme} />

            <button type="submit" className="postBtn">
                Post
            </button>
        </form>
    )
}

export default InputComment
