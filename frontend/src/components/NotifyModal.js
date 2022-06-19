import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NoNotice from '../images/notice.png'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import moment from 'moment'
import { isReadNotify, NOTIFY_TYPES, deleteAllNotifies } from '../redux/actions/notifyAction'

const NotifyModal = () => {
    const { auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }))
    }

    const handleSound = () => {
        dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound })
    }

    const handleDeleteAll = () => {
        const newArr = notify.data.filter(item => item.isRead === false)
        if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

        if (window.confirm(`You have ${newArr.length} unread notices. Are you sure you want to delete all?`)) {
            return dispatch(deleteAllNotifies(auth.token))
        }
    }

    return (
        <div style={{ minWidth: '300px' }}>
            <div className="d-flex justify-content-between align-items-center px-3">
                <h3>Notification</h3>
                {
                    notify.sound
                        ? <i className="fas fa-bell text-danger"
                            style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                            onClick={handleSound} />

                        : <i className="fas fa-bell-slash text-danger"
                            style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                            onClick={handleSound} />
                }
            </div>
            
