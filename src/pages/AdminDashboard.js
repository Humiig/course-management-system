import React from 'react';
import { Table, Button, Layout, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAuthor } from '../features/authorsSlice';  

const { Content } = Layout;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.list);

  const handleAddAuthor = () => {
    navigate('/manage-authors/new');
  };

  const handleDeleteAuthor = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this author?',
      onOk: () => {
        dispatch(deleteAuthor(id));
      },
    });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button danger onClick={() => handleDeleteAuthor(record.id)}>Delete</Button>
      ),
    },
  ];

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Button type="primary" onClick={handleAddAuthor} style={{ marginBottom: '20px' }}>
          Add Author
        </Button>
        <Table dataSource={authors} columns={columns} rowKey="id" />
      </Content>
    </Layout>
  );
};

export default AdminDashboard;
