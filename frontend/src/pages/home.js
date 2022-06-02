import React, { useEffect } from 'react'

import Status from '../components/home/Status'


const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])

    
            
            <div className="col-md-4"> 
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
