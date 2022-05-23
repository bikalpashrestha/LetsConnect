 import React,{useState,useEffect} from 'react'
 import {useSelector,useDispatch} from "react-redux"
 import {useHistory,Link} from "react-router-dom"
 import {register} from "../redux/actions/authAction"
 

 const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
 
     useEffect(()=>{
    if(auth.token) history.push("/")
     },[auth.token,history])
     
    
    
     