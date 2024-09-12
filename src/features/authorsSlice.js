import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    list: [],
  },
  reducers: {
    addAuthor: (state, action) => {
      state.list.push({ id: Date.now(), name: action.payload });
    },
    deleteAuthor: (state, action) => {
      state.list = state.list.filter(author => author.id !== action.payload);
    },
    setAuthors: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addAuthor, deleteAuthor, setAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
