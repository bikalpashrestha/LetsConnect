import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'

const CommentDisplay = ({comment, post, replyCm}) => {
    const [showRep, setShowRep] = useState([])
    const [next, setNext] = useState(1)

    useEffect(() => {
        setShowRep(replyCm.slice(replyCm.length - next))
    },[replyCm, next])

   
