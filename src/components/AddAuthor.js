import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAuthor } from '../features/authorsSlice';  

const { Content } = Layout;

const AddAuthor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addAuthor(values.name));
    navigate('/admin'); 
  };

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Form onFinish={handleSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the author name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddAuthor;
