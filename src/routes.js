import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';
import AddAuthor from './components/AddAuthor';
import Header from './components/Header';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const { role } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/admin" element={<LoginPage role="admin" />} />
        <Route path="/login/teacher" element={<LoginPage role="teacher" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/teacher" element={role === 'teacher' ? <TeacherDashboard /> : <Navigate to="/" />} />
        <Route path="/manage-authors/new" element={<AddAuthor />} />
        <Route path="/manage-courses/new" element={<AddCourse />} />
        <Route path="/manage-courses/:id" element={<EditCourse />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
