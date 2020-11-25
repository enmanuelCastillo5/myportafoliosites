import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Resume from '../pages/Resume'

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/project' component={Project} />
            <Route path='/resume' component={Resume} />
        </Switch>
    )
}

export default Main