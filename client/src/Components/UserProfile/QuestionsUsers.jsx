import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/Actions';

const QuestionsUsers = () => {
   const posts = useSelector((state) => state.posts)
   const dispatch = useDispatch();
   const currentUser = JSON.parse(localStorage.getItem("currentUser")).fullname
   console.log('soyCurrentUser', currentUser)
   console.log('soy posts', posts)

   const resultQuestionsUser = []
   console.log(resultQuestionsUser)
   let postsCurrentUser = posts.forEach((post) => {
    console.log(post.author)
    if (post.author === currentUser) {
        resultQuestionsUser.push(post)
    }
   })

   useEffect(() => {
    dispatch(getPosts());
   }, [])




   return (
    <div className=''>
        {
            resultQuestionsUser.map((q) => {
                return(
                    <div>
                    <div>
                        <h1>{q.title}</h1>
                        <p>{q.content}</p>
                    </div>
                    <div>
                        {q.img ? q.img.map((i) => {
                            return (
                                <img src={i} alt="not found" className='w-[15%]' />
                            )
                        }): null }
                    </div>
                    <div>

                        <p>{q.author}</p>
                        <p>{q.date}</p>

                    </div>
                    </div>

                )
            })
        }
    </div>
   )

   

}
 
export default QuestionsUsers;