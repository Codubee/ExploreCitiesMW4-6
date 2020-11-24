import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import './ToolCard.css'

function ToolCard(props) {
    return (
    <Card className="tool-card-class">
        <CardBody>
            <CardTitle tag="h2">{props.title}</CardTitle>
            <CardSubtitle>
                <a href={props.link}>Website</a>
            </CardSubtitle>
            <hr/>
            <CardText>{props.description}</CardText>
        </CardBody>
    </Card>
    )
}

export default ToolCard