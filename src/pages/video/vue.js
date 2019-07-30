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
          onClick={() => history.push({
            pathname: '/video/flutter-page',
            state: {
              id: 3,
              name: 'xiexie'
            }
          })}
          type="primary">go(隐式传参)</Button>
      </div>
    )
  }
}