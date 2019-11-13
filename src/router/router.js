import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import * as test from 'react-router-dom'
import Index from '../pages/index'
import Video from '../pages/video.js'
import Work from '../pages/work.js'
import './../index.css'

console.log('test:', test)

const AppRouter = () => {
	let routes = [
		{ path: '/', title: '博客首页', exact: true, component: Index },
		{ path: '/video/', title: '视频教程', exact: false, component: Video },
		{ path: '/work/', title: '职场技能', exact: false, component: Work }
	]
	return (
		<HashRouter>
			<div className='mainDiv'>
				<div className='leftNav'>
					<h3>一级导航</h3>
						{
							routes.map((item, index) => {
								return (
									<div key={index}>
										<Link to={item.path}>{item.title}</Link>
									</div>
								)
							})
						}
				</div>
				<div className='rightMain'>
					{
						routes.map((item, index) => {
							return(
								<Route 
									component={item.component}
									path={item.path} 
									key={index}
									exact={item.exact}/>
							)
						})
					}
				</div>
			</div>
		</HashRouter>
	)
}
export default AppRouter;