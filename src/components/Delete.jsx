import { useDispatch } from 'react-redux'
import { handleDelete } from '../redux/todoSlice'

const Delete = ({ id }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(handleDelete({ id: id }))}>Delete</button>
    </div>
  )
}

export default Delete