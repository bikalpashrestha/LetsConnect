import React, { useState, useEffect, useRef } from 'react'
import UserCard from '../UserCard'
i

const LeftSide = () => {
    const { auth, message, online } = useSelector(state => state)
   


    
    

   
    return (
        <>
            <form className="message_header" onSubmit={handleSearch} >
                <input type="text" value={search}
                placeholder="Enter to Search..."
                onChange={e => setSearch(e.target.value)} />

                <button type="submit" style={{display: 'none'}}>Search</button>
            </form>

            <div className="message_chat_list">
                {
                    searchUsers.length !== 0
                    ?  <>
                        {
                            searchUsers.map(user => (
                                <div key={user._id} className={`message_user ${isActive(user)}`}
                                onClick={() => handleAddUser(user)}>
                                    <UserCard user={user} />
                                </div>
                            ))
                        }
                        
                    
                }
               
               <button ref={pageEnd} style={{opacity: 0}} >Load More</button>
            </div>
        </>
    )
}

export default LeftSide
