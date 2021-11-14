import style from "./NewPostForm.module.css"
import React, { useRef, useState } from "react"
import { Post } from "../Model"

interface NewPostFormProps {
  onPostAdded: (post: Post) => void
}
let incrementor = 0

export const NewPostForm: React.FC<NewPostFormProps> = ({ onPostAdded }) => {
  const [errors, setErrors] = useState<{ name: boolean; text: boolean }>({
    name: false,
    text: false,
  })
  const nameRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    if (nameRef.current!.value === "" || textRef.current!.value === "") {
      setErrors({
        name: nameRef.current!.value === "",
        text: textRef.current!.value === "",
      })
    } else {
      const id = incrementor++
      const time = new Date()
      const rating = 0
      const name = nameRef.current!.value
      const text = textRef.current!.value
      setErrors({
        name: false,
        text: false,
      })
      onPostAdded({ id, time, rating, name, text, children: [] })
    }
  }
  return (
    <form className={style.box} onSubmit={submitHandler}>
      <div>
        <label htmlFor="username"></label>
        <input
          className={style.textfield}
          type="text"
          id="username"
          ref={nameRef}
          placeholder="Name"
        />
        {errors.name && <p>empty name</p>}
      </div>
      <div>
        <label htmlFor="usertext"></label>
        <textarea
          className={style.textfield}
          id="usertext"
          ref={textRef}
          placeholder="Message"
        ></textarea>
        {errors.text && <p>empty text</p>}
      </div>
      <button className={style.button} type="submit">
        Submit
      </button>
    </form>
  )
}
