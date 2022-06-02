import React, { useState, useEffect } from 'react'
import PostThumb from '../PostThumb'




    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`user_posts/${id}?limit=${page * 9}`, auth.token)
        const newData = {...res.data, page: page + 1, _id: id}
        dispatch({type: PROFILE_TYPES.UPDATE_POST, payload: newData})
        setLoad(false)
    }

    return (
        <div>
            <PostThumb posts={posts} result={result} />

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

            
            <LoadMoreBtn result={result} page={page}
            load={load} handleLoadMore={handleLoadMore} />
            
        </div>
    )
}

export default Posts
