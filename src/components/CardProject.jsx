import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

const CardProject = ({ url, number, name }) => {
    return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${url}) center / cover`}}>{name}: {number}</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>github
                    <IconButton name="cloud_done" />
                </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    )
}

export default CardProject