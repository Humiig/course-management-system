import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    editCourse: (state, action) => {
      const index = state.list.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteCourse: (state, action) => {
      state.list = state.list.filter(course => course.id !== action.payload);
    },
  },
});

export const { addCourse, editCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
