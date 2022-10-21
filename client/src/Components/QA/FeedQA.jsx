import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Redux/Actions/Actions'


const FeedQA = () => {
    const dispatch = useDispatch();
    const posteos = useSelector((state) => state.posts);
    console.log(posteos)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return ( 
        <div className='containerFeedQA'>
            
        </div>
     );
}
 
export default FeedQA;