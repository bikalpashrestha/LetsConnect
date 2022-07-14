import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const { user, token } = useSelector(state => state.auth)
    
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span className="lab la-accusoft"> </span> Admin </h1>
                </div>

                

            </div>

            <div className="main-content">
                <header>
                    <h2>
                        <label htmlFor="">

                            <span className="la la-bars"></span>
                        </label>
                        Dashboard

                    </h2>
                    <div className="search-wrapper">
                        <span className="las la-search"></span>
                        <input type="search" placeholder="search here" />
                    </div>
            
                </header>

                <main>

                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <h1>{users.length}</h1>
                                <span className="las la-users">Users</span>
                            </div>
                            <div>
                                <span className="las la-users"></span>
                            </div>
                        </div>

                        <div className="card-single">
                            <div>
                                <h1>{homePosts?.result}</h1>
                                <span>Posts</span>
                            </div>
                            <div>
                                <span className="las la-clipboard"></span>
                            </div>
                        </div>

                        <div className="card-single">
                            <div>
                                <h1>{homePosts?.comments?.length}</h1>
                                <span>comments</span>
                            </div>
                            <div>
                                <span className="las la-users"></span>
                            </div>
                        </div>

                        
                    </div>

                    <div className="recent-grid">
                        <div className="Users">
                            <div className="card">
                                <div className="card-header">
                                    <h2> Recent Users</h2>

                                    <UserListTable users={users} />
                                </div>


                            </div>

                        </div>


                    </div>

                </main>
            </div>

        </>
    )
}

export default Dashboard