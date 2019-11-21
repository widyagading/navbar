import React from 'react'
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom'
import register from'./register'
import Login from './login'

class Header extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand">React</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><Link to={'/register'} className="nav-link">Register</Link></li>
                                <li className="nav-item"><Link to={'/login'} className="nav-link">Login</Link></li>
                            </ul>
                        </div>
                    </nav> <br />
                    <Switch>
                        <Route exact path='/register' component={ register }/>
                        <Route path='/login' component={ Login }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header;