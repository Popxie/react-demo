import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Detail from '../pages/detail'
import MainLayout from '../pages/mainLayout'


const BasicRoute = () => (
	// <Redirect to='/index' />
	<HashRouter>
		<Switch>
			<Route path="/" component={
				<MainLayout>
					<Route exact path="/" component={Home} />
					<Route exact path="/detail" component={Detail} />
					<Route exact path="/details/:id/:name" component={Detail} />
				</MainLayout>
			}/>
			{/* <Route path="/" component={MainLayout}/> */}
		</Switch>
	</HashRouter>
);


export default BasicRoute;