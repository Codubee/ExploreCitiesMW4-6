import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
    } from 'reactstrap';
import './FeaturesCard.css'

function FeaturesCard(props) {
    return
    (
        <Card className = "features-card-class">
            <CardImg top width="100%" src={props.CardImg}>
                <CardBody>
                    <CardTitle tag='h2'>
                        {props.CardTitle}
                    </CardTitle>
                    <CardText class = 'text'>
                        {props.CardText}
                    </CardText>
                    <Button variant = 'primary'>
                        {props.Button}
                    </Button>
                </CardBody>
            </CardImg>
        </Card>
    )
}

export default FeaturesCard;