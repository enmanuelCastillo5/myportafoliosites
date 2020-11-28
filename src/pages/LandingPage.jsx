import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/perfil.png'

const styles = {
  landing: {
    width: '100%',
    margin: 'auto'
  }
}
class LandingPage extends Component {
  render() {
    return(
      <div style={styles.landing}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={img}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap - Material | JavaScript | React |  NodeJS  | Ruby On Rails </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;