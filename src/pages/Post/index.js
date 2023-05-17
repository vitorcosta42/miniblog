import React from 'react'
import styles from './Post.module.css'
import Loading from "../../components/Loading"
//hooks 
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const {id} = useParams();
  const {document:post,loading} = useFetchDocument("posts",id)
  return (
    <div className={styles.post_container}>
      {loading && <Loading/>}
      {post && (
        <>
        <h1>{post.title}</h1>
        <img src={post.image} alt ={post.tile} />
        <p className={styles.body}>{post.body}</p>
        <div className={styles.tags}>
        {post.tags.map((tag)=> (
          <p key ={tag} >
            <span>#{tag}</span>
          </p>
        ))}
        </div>
        
        </>
      )}
    </div>
  )
}

export default Post