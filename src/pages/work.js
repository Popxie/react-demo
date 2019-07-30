import React from 'react'
import { Route, Link } from 'react-router-dom'
import Money from './work/money'
import WakeUp from './work/wakeup'

function Work() {
  return(
    <div>
      <div className='topNav'>
        <div className='title-cont'>
          <Link to='/work/money'>加薪秘籍</Link>
          <Link className='title-style' to='/work/wake-up'>早起攻略</Link>
        </div>
      </div>
      <div className='videoContent'> 
        <div>
          <h3>职场软技能</h3>
        </div>
        <Route path='/work/money' component={Money}></Route>
        <Route path='/work/wake-up' component={WakeUp}></Route>
      </div>
    </div>
  )
}

export default Work