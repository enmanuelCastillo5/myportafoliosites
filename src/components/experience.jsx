import React from 'react'
import {Grid, Cell } from 'react-mdl'

const Experience = ({ startYears, endYears, jobName, jobDescription }) => {
return (
    <div>
        <Grid>
            <Cell col={4}>
                <p>{startYears} - {endYears}</p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTop:'0px'}}>{jobName}</h4>
                <p>{jobDescription}</p>
            </Cell>
        </Grid>
    </div>
)
}

export default Experience