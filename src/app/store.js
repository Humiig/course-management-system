import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';
import authorsReducer from '../features/authorsSlice';
import coursesReducer from '../features/coursesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    authors: authorsReducer,
    courses: coursesReducer,
  },
});

export default store;
