import React from 'react'
import {
    Form,
    Input,
    Icon,
    Button,
  } from 'antd';
  import '../less/index.less'
  import logo from '../images/PureRetail_Logo.png'
  
  const Login = (props) => {
  
    const handleSubmit = e => {
      e.preventDefault();
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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
                <h2>Log in</h2>
            </div>
          <Form.Item>
            {getFieldDecorator('number', {
              rules: [
                {
                  message: 'Enter valid phone number',
                },
                {
                  required: true,
                  message: 'Enter valid phone number',
                },
              ],
            })(<Input
            placeholder="Phone number"
            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ],
            })(<Input.Password 
                placeholder="Password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div id="or_login">
            <p>or <a>register</a> instead</p>
        </div>
        <div id="or_login">
            <p><a>Forgot password?</a></p>
        </div>
        </div>
      );
  }
  
  const LoginForm = Form.create({ name: 'register' })(Login)

  export default LoginForm