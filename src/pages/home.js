import React from 'react';
import { Button } from 'antd'

export default class Home extends React.Component {
  goDetailClick = () => {
    const { history } = this.props
    history.push('details/777/xie')
  }
  render() {
    const { history } = this.props
    return (
      <div style={{ margin: 15 }}>
        <Button 
          onClick={this.goDetailClick}
          type="link">去details(显示传参)</Button>
        <Button 
          onClick={() => history.push({
            pathname: '/detail',
            state: {
              id: 3,
              name: 'xiexie'
            }
          })}
          type="primary">去detail(隐式传参)</Button>
      </div>
    )
  }
}