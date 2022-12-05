import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'



export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);



    function handleDeleteComment(){

        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        }); 
    }



    return(
     <div className={styles.comment}>
           <Avatar hasBorder={false}src="https://github.com/erikpolsci.png"/> 

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                <div className={styles.authorAndTime}>
                    <strong>Erik Sales</strong>
                    <time title="november 30 12:07pm"dateTime="2022-11-30 12:06:30">1 hour ago</time>

                </div>

                <button onClick={handleDeleteComment}title='excluir comentario'>
                    <Trash size={24}/>
                </button>
                </header>
                <p>
                    {content}
                </p>
            </div>

            <footer>
              <button onClick={handleLikeComment}>
                <ThumbsUp size={20}/>
                Aplaudir <span>{likeCount}</span>
              </button>
            </footer>
         </div>
     </div>
    )
}