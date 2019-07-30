import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/reactPage'
import Vue from './video/vue'
import Flutter from './video/flutter'

function Video() {
  return(
    <div>
      <div className='topNav'>
        <div className='title-cont'>
          <Link to='/video/react-page'>React教程</Link>
          <Link className='title-style' to='/video/flutter-page'>Flutter教程</Link>
          <Link to='/video/vue-page'>Vue教程</Link>
        </div>
      </div>
      <div className='videoContent'> 
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path='/video/react-page' component={ReactPage}></Route>
        <Route path='/video/flutter-page' component={Flutter}></Route>
        <Route path='/video/vue-page' component={Vue}></Route>
      </div>
    </div>
  )
}

export default Video