import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import avatar from "../images/avatar.png"
import { logout } from '../redux/actions/authAction'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../redux/actions/profileAction'
import { getComments } from '../redux/actions/postAction'
import UserListTable from '../components/admin/UserListTable'

const Dashboard = () => {
    const { user, token } = useSelector(state => state.auth)
    const homePosts = useSelector(state => state.homePosts)
    const { users } = useSelector(state => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers({ token }))
    }, [dispatch, token])

    useEffect(() => {
        dispatch(getComments({ token }))
    }, [dispatch, token])

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><span className="lab la-accusoft"> </span> Admin </h1>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li><Link to="/" className="active"> <span className="las la-igloo"></span>
                            <span>Dashboard</span></Link>
                        </li>

                    </ul>
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

                    <div className="user-wrapper">
                        <img src={user?.avatar ? user?.avatar : avatar} width="30px" height="30px" alt="tchjdfk" />
                        <div>
                            <h4>{user?.username}</h4>
                            <small>Super admin</small>
                            

                            {/* clogout */}
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/"
                    onClick={() => dispatch(logout())}>
                        Logout
                    </Link>
                        </div>
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