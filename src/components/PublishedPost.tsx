import { formatDate } from "../formatters"
import style from "./PublishedPost.module.css"
import React, { useState } from "react"
import { NewPostForm } from "./NewPostForm"
import { Post } from "../model"

/* Display a unique post, its children, a form to reply  */

interface PublishedPostProps {
  post: Post
  depth: number
}

export const PublishedPost: React.FC<PublishedPostProps> = ({
  post,
  depth,
}) => {
  const [isReplying, setIsReplying] = useState(false)
  // TODO: remove and replace by redux
  // Forces re-render when modifying global state
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
      <div className={style.titleWrapper}>
        <h3>{post.name}</h3>
        <p className={style.time}>{formatDate(post.time)}</p>
      </div>
      <div className={style.contentWrapper}>
        <p className={style.text}>{post.text}</p>
        <div className={style.rating}>
          <button onClick={() => incrementRating(1)}>👍</button>
          <h3>{post.rating}</h3>
          <button onClick={() => incrementRating(-1)}>👎</button>
        </div>
      </div>
      {isReplying && (
        <NewPostForm className={style.newForm} onPostAdded={addHandler} />
      )}
      {depth < 2 && !isReplying && (
        <button
          className={"button " + style.button}
          onClick={() => setIsReplying(true)}
        >
          reply
        </button>
      )}
      {post.children.map((post) => (
        <PublishedPost key={post.id} post={post} depth={depth + 1} />
      ))}
    </div>
  )
}
