import style from "./StarterPost.module.css"
import React from "react"
import { NewPostForm } from "./NewPostForm"
import { Post } from "../Model"
import { NEWPOST } from "../constants"

interface StarterPostProps {
  onPostAdded: (post: Post) => void
}

export const StarterPost: React.FC<StarterPostProps> = ({ onPostAdded }) => {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{NEWPOST}</h2>
      <div className={style.gridContainer}>
        <NewPostForm onPostAdded={onPostAdded} />
      </div>
    </div>
  )
}
