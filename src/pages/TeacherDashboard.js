import React from 'react';
import { Table, Button, Layout, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../features/coursesSlice';
import '../styles/AuthPage.scss';

const { Content } = Layout;

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const courses = useSelector(state => state.courses.list);

  const handleAddCourse = () => {
    navigate('/manage-courses/new');
  };

  const handleEditCourse = (id) => {
    navigate(`/manage-courses/${id}`);
  };

  const handleDeleteCourse = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this course?',
      onOk: () => {
        dispatch(deleteCourse(id));
      },
    });
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Author Name', dataIndex: 'author', key: 'author' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button className= "ant-button" onClick={() => handleEditCourse(record.id)}>Edit</Button>
          <Button className= "ant-button" danger onClick={() => handleDeleteCourse(record.id)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Button type="primary" onClick={handleAddCourse} style={{ marginBottom: '20px' }}>
          Add Course
        </Button>
        <Table dataSource={courses} columns={columns} rowKey="id" />
      </Content>
    </Layout>
  );
};

export default TeacherDashboard;
