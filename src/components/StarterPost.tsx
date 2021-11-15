import style from "./StarterPost.module.css"
import React from "react"
import { NewPostForm } from "./NewPostForm"
import { Post } from "../model"
import { NEWPOST } from "../constants"

/* First form on the page that enables top-level posts  */

interface StarterPostProps {
  onPostAdded: (post: Post) => void
}

export const StarterPost: React.FC<StarterPostProps> = ({ onPostAdded }) => {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{NEWPOST}</h2>
      <NewPostForm onPostAdded={onPostAdded} />
    </div>
  )
}
