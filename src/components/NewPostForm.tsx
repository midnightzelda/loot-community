import style from "./NewPostForm.module.css"
import React, { useState } from "react"
import { Post } from "../model"

/* Form that takes data to create a post, validates and creates a new post  */

interface NewPostFormProps {
  onPostAdded: (post: Post) => void
  className?: string
}
let incrementor = 0

export const NewPostForm: React.FC<NewPostFormProps> = ({
  onPostAdded,
  className,
}) => {
  const [errors, setErrors] = useState<{ name: boolean; text: boolean }>({
    name: false,
    text: false,
  })
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    /* TODO: use a validation library and component library  */

    if (name.trim() === "" || text.trim() === "") {
      setErrors({
        name: name.trim()  === "",
        text: text.trim() === "",
      })
    } else {
      const id = incrementor++
      const time = new Date()
      const rating = 0
      setErrors({
        name: false,
        text: false,
      })
      onPostAdded({ id, time, rating, name, text, children: [] })
    }
  }
  return (
    <form className={style.box + " " + className} onSubmit={submitHandler}>
      <div>
        <label htmlFor="username"></label>
        <input
          className={style.textfield}
          type="text"
          id="username"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        {errors.name && <p className={style.error}>A name is required</p>}
      </div>
      <div>
        <label htmlFor="usertext"></label>
        <textarea
          className={style.textfield}
          id="usertext"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Message"
        ></textarea>
        {errors.text && (
          <p className={style.error}>A post content is required</p>
        )}
      </div>
      <button className={"button " + style.button} type="submit">
        Submit
      </button>
    </form>
  )
}
