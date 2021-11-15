import style from "./App.module.css"
import React, { useState } from "react"
import { StarterPost } from "./components/StarterPost"
import { PublishedPost } from "./components/PublishedPost"
import { TITLE } from "./constants"
import { Post } from "./model"

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  return (
    <div className={style.main}>
      <h1 className={style.title}>{TITLE}</h1>
      <div className={style.gridContainer}>
        <StarterPost onPostAdded={(post) => setPosts([...posts, post])} />
        {posts.map((post) => (
          <PublishedPost key={post.id} post={post} depth={0} />
        ))}
      </div>
    </div>
  )
}

export default App
