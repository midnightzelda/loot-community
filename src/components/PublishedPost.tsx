import { formatDate } from "../formatters"
import style from "./PublishedPost.module.css"
import React, { useState } from "react"
import { NewPostForm } from "./NewPostForm"
import { Post } from "../Model"

interface PublishedPostProps {
  post: Post
  depth: number
}

export const PublishedPost: React.FC<PublishedPostProps> = ({
  post,
  depth,
}) => {
  const [isReplying, setIsReplying] = useState(false)
  const [incrementor, setIncrementor] = useState(0)

  const addHandler = (newPost: Post) => {
    post.children.push(newPost)
    setIncrementor(incrementor + 1)
    setIsReplying(false)
  }

  const incrementRating = (rating: number) => {
    post.rating += rating
    setIncrementor(incrementor + 1)
  }

  return (
    <div className={style.box}>
      <h3 className={style.name}>{post.name}</h3>
      <p className={style.time}>{formatDate(post.time)}</p>
      <p className={style.text}>{post.text}</p>
      <div className={style.rating}>
        <button onClick={() => incrementRating(1)}>^</button>
        <h3>{post.rating}</h3>
        <button onClick={() => incrementRating(-1)}>v</button>
      </div>
      {isReplying && <NewPostForm onPostAdded={addHandler} />}
      {depth < 2 && <button onClick={() => setIsReplying(true)}>reply</button>}
      {post.children.map((post) => (
        <PublishedPost key={post.id} post={post} depth={depth + 1} />
      ))}
    </div>
  )
}
