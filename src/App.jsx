import React from 'react'
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import './App.css'
import Main from './components/Main'

const App = () => {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Enmanuel Castillo</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Proyect</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/">Enmanuel Castillo</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Proyect</Link>
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
