import React from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
} from 'antd';

class Welcome extends React.Component {
  state = {
    email: '',
    name: ''
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { email,name } = values
        this.setState({ email })
        this.setState({ name })
      }
    })
  }

  sendParams = () => {
    console.log('state2:', this.state)
    this.props.handleClick(this.state.email, this.state.name);
  }

  render() {
    const { getFieldDecorator, resetFields } = this.props.form
    return (
      <Form layout="inline">
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(<Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            allowClear
            placeholder="E-mail" />
          )}
        </Form.Item>

        <Form.Item label="Your Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(<Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            allowClear
            placeholder="name" />
          )}
        </Form.Item>

        <Button onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={() => resetFields()}>Reset</Button>
        <Button onClick={this.sendParams}>Send Params</Button>
      </Form>
    )
  }
}
const WelcomeForm = Form.create({})(Welcome);

export default  WelcomeForm 