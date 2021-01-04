import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
    } from 'reactstrap';
import './FeaturesCard.css'

function FeaturesCard(props) {
    return(
        <Card className = "features-card-class">
            <CardBody>
                <CardTitle tag='h2'>
                    {props.CardTitle}
                </CardTitle>
                <CardText class = 'text'>
                    {props.CardText}
                </CardText>
                <Button variant = 'primary' style={{backgroundColor: '#EE6C4D'}}>
                    {props.Button}
                </Button>
            </CardBody>
        </Card>
    )
}

export default FeaturesCard;