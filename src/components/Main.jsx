import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Proyect from './Proyect'
import Resume from './Resume'

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route path='/proyect' component={Proyect} />
            <Route path='/resume' component={Resume} />
        </Switch>
    )
}

export default Main