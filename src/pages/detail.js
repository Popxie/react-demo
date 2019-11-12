import React from 'react';
import { Button } from 'antd'

export default class Home extends React.Component {
  componentDidMount() {
    console.log('props:', this.props)
    const { match, location } = this.props
    console.log('显式参数',match.params);
    console.log('隐式参数',location.state);
  }
  goHomeClick = () => {
    const { history } = this.props
    history.push('/')
  }
  render() {
    const { history } = this.props
    return (
      <div style={{ margin: 15 }}>
        <Button 
          onClick={this.goHomeClick}
          type="link">回到home</Button>
        <Button 
          onClick={() => history.push('/')}
          type="primary">通过函数跳转</Button>
        <Button 
          style={{ marginLeft: 15 }}
          onClick={() => history.goBack()}
          type="primary">返回</Button>
      </div>
    )
  }
}