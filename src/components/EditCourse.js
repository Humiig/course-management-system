import React, { useEffect} from 'react';
import { Form, Input, Button, Select, Layout, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editCourse } from '../features/coursesSlice';

const { Content } = Layout;

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector(state => state.courses.list);
  const authors = useSelector(state => state.authors.list);
  
  const courseToEdit = courses.find(course => course.id === parseInt(id));
  const [form] = Form.useForm();

  useEffect(() => {
    if (courseToEdit) {
      form.setFieldsValue(courseToEdit);
    } else {
      message.error('Course not found.');
      navigate('/teacher');
    }
  }, [courseToEdit, form, navigate]);

  const handleSubmit = (values) => {
    try {
      dispatch(editCourse({ id: parseInt(id), ...values }));
      message.success('Course updated successfully!');
      navigate('/teacher');
    } catch (error) {
      message.error('Failed to update course.');
      console.error('Error updating course:', error);
    }
  };

  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
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
            <Button type="primary" htmlType="submit">Update</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditCourse;
