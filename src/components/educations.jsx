import React from 'react'
import {Grid, Cell } from 'react-mdl'

const Education = ({ startYears, endYears, schoolName, schooldescription }) => {
return (
    <div>
        <Grid>
            <Cell col={4}>
                <p>{startYears} - {endYears}</p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTop:'0px'}}>{schoolName}</h4>
                <p>{schooldescription}</p>
            </Cell>
        </Grid>
    </div>
)
}

export default Education