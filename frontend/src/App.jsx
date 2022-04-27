import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { Route, Switch } from 'wouter'

import './styles/index.css'

const App = () => {
	return (
		<>
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/:rest*' component={NotFound} />
			</Switch>
		</>
	)
}

export default App
