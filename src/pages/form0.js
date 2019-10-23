import React from 'react';
import {
  Icon,
  Form,
  Input,
  Button,
} from 'antd';

class Welcome extends React.Component {
  state = {
    email: '22',
    password: '33'
  }
  searchClick = () => {
    console.log(this.state)
  }
  passwordChange = (event) => {
    const target = event.target
    const { name, value } = target
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <Form layout="inline" >
        <Form.Item label="E-mail">
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.email}
            name='email'
            onChange={this.passwordChange}
            allowClear
            placeholder="Username"/>
        </Form.Item>

        <Form.Item label="Password">
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            value={this.state.password}
            onChange={this.passwordChange}
            name='password'
            type="password"
            placeholder="password"/>
        </Form.Item>
        <Button onClick={this.searchClick}>Search</Button>
      </Form>
    )
  }
}

export { Welcome }