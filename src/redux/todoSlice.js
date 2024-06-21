import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [
      { id: 1, completed: false, title: "Title1" },
      { id: 2, completed: true, title: "Title2" },
      { id: 3, completed: false, title: "Title3" },
      { id: 4, completed: true, title: "Title4" },
    ]
  },
  reducers: {
    onToggle: (state, action) => {
      state.data = state.data.map((value) => (
        value.id === action.payload.id
          ? { ...value, completed: !value.completed }
          : value
      ))
    },
    handleDelete: (state, action) => {
      state.data = state.data.filter((value) => value.id !== action.payload.id);
    },
  },
})

export const { onToggle, handleDelete } = todoSlice.actions;

export default todoSlice.reducer