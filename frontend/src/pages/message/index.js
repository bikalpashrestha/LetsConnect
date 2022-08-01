import React from 'react'
import LeftSide from '../../components/message/LeftSide'

const Message = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0">
                <LeftSide />
            </div>

            <div className="col-md-8 px-0 right_mess">
                <div className="d-flex justify-content-center 
                align-items-center flex-column h-100">

                    {/* <i className="fab fa-facebook-messenger text-primary"
                    style={{fontSize: '5rem'}} /> */}
                    <h1 className="navbar-brand text-uppercase p-0 m-0" onClick={() => window.scrollTo({ top: 0 })}>
                        Port<span className='text-primary'>al </span><span className='text-danger'>Message</span>

                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Message
