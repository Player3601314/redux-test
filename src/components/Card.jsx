import React from 'react'
import Delete from './Delete'
import { useDispatch } from 'react-redux'
import { onToggle } from '../redux/todoSlice'

const Card = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ display: "flex" }}>
      <h2>{title}</h2>
      <input
        type="checkbox"
        checked={completed}
        value={completed}
        onChange={() => dispatch(onToggle({ id: id }))}
      />
      <Delete id={id} />
    </div>
  )
}

export default Card