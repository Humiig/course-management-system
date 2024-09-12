import React from 'react';
import { Form, Input, Button, Select, Layout, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../features/coursesSlice';

const { Content } = Layout;

const AddCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.list);

  const handleSubmit = (values) => {
    try {
      dispatch(addCourse(values));
      message.success('Course added successfully!');
      navigate('/teacher');  
    } catch (error) {
      message.error('Failed to add course.');
      console.error('Error adding course:', error);
    }
  };

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Form onFinish={handleSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="Author Name" rules={[{ required: true }]}>
            <Select>
              {authors.map(author => (
                <Select.Option key={author.id} value={author.name}>
                  {author.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddCourse;
