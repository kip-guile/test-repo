import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
    Form,
    Input,
    Select,
    Button,
    message
  } from 'antd';
  import '../../less/index.less'
  import * as creators from '../../state/actionCreators'
  import logo from '../../images/PureRetail_Logo.png'

  const { Option } = Select;
  
  const CreateStore = (props) => {

    const dispatch = useDispatch()
  
    const handleSubmit = e => {
      props.form.validateFieldsAndScroll((err, values) => {
        const payload = {
            name: values.name,
            currency: values.currency
          }
        if (!err) {
            dispatch(creators.updateForm(payload))
        } else {
            message.error('Validation failed')
          }
      });
    };
  
      const { getFieldDecorator } = props.form
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
  
      return (
        <div className="cover">
        <div id='logo'>
          <img src={logo} alt='PureRetail Logo' />
        </div>
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <div id="header">
                <h2>Lets get started</h2>
            </div>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [
                {
                  message: 'Enter your name',
                },
                {
                  required: true,
                  message: 'Enter your name',
                },
              ],
            })(<Input
            placeholder="My name is..."
            />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('currency', {
              rules: [
                {
                  required: true,
                  message: 'Select preferred currency',
                },
              ],
            })(
                <Select placeholder="... and I prefer to sell in">
                <Option value="Dollar">Dollar</Option>
                <Option value="Pounds">Pounds</Option>
                <Option value="Yen">
                Yen
                </Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <NavLink to='/addlogo'>
                <Button type="primary" htmlType="submit">
                Next
                </Button>
            </NavLink>
          </Form.Item>
        </Form>
        </div>
      );
  }
  
  const CreateStoreForm = Form.create({ name: 'register' })(CreateStore)

  export default CreateStoreForm