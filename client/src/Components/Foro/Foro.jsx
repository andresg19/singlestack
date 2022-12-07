import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getFeedPosts } from '../../Redux/Actions/Actions';
import Nav from '../NavBar/Nav';
import PostsForo from './PostForo';


const Foro = () => {
    const dispatch = useDispatch();
    const actualUser = JSON.parse(localStorage.getItem("currentUser"))
    const posts = useSelector((state) => state.feedPosts)
    const [modal, setModal] = useState(false);

    const modalOpen = () => {
        setModal(true);
        console.log("open");
      };
      const modalClose = () => {
        setModal(false);
        console.log("close");
      };


    useEffect(() => {
        dispatch(getFeedPosts());
    }, [])
     
    return ( 
        <div>
            <Nav />
            <div className='flex bg-[#AAAAA] w-[40%] h-[20vh] ml-auto mr-auto mt-10 rounded-xl bg-[#1d2b50] shadow-sm shadow-[#0f0f0fbd]'>
                <img
                 src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                 alt="not found"
                 width={50}
                 className="flex w-[10%] h-[40%] rounded-[50%] mt-[7%] ml-10"
                />
                {modal ? 
                (
                    <div>

                        <PostsForo />
                        <button onClick={modalClose}>Cerrar ventana</button>
                    </div>
                ) :
                (<input onClick={modalOpen} placeholder='Haz un posteo' 
                className="grid w-[60%] placeholder:text-slate-400 py-2 pl-3 pr-3 h-7 mt-12 ml-10 rounded-xl" 
                /> )

                }
            </div>
        </div>
     );
}
 
export default Foro;