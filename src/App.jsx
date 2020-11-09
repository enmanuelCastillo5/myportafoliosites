import React from 'react'
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Enmanuel Castillo" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/proyect">Proyect</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/proyect">Proyect</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;