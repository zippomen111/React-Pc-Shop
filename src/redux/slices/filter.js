import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: { name: "rating", id: 0 },
}

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortId(state, action) {
      state.sort.name = action.payload
    },
    setSortIndex(state, action) {
      state.sort.id = action.payload
    }
  }
})

export const { setCategoryId } = filterSlice.actions
export const { setSortId } = filterSlice.actions
export const { setSortIndex } = filterSlice.actions
export default filterSlice.reducer