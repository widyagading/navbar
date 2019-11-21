import React from 'react'
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom'
import Navbar from './Components/Navbar';
import register from'./Components/register'
import Login from './Components/login'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <Navbar />  
                    <Switch>
                        <Route exact path='/register' component={ register }/>
                        <Route path='/login' component={ Login }/>
                    </Switch>
                
            </Router>
      </div>
    )
  }
}

export default App;