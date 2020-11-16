import React from 'react'
import {
        Card, CardImg, CardText, CardBody,
        CardTitle, Button
        } from 'reactstrap'
import './Features.css'

function Features()
{
    return
    (
        <div className = "featuresPage">
            <h1 id = "header">App Features</h1>
        <div className = "features">

            <featuresCard
                CardImg = "Stock photo"
                CardTitle = "Explore nearby cities!"
                CardText = "Description"
                Button = "Click here"
            />
            <featuresCard
                CardImg = "Stock photo"
                CardTitle = "Enjoy the local cuisine!"
                CardText = "Description"
                Button = "Click here"
            />
            <featuresCard
                CardImg = "Stock photo"
                CardTitle = "Find cool things to do!"
                CardText = "Description"
                Button = "Click here"
            />
        </div>
    </div>
    );
}

const featuresCard = (props) =>
{
    return
    (
        <Card>
            <CardImg top width = "100%" src ={props.CardImg}>
                <CardBody>
                    <CardTitle tag="h5">
                        {props.CardTitle}
                    </CardTitle>
                    <CardText>
                        {props.CardText}
                    </CardText>
                    <Button>
                        {props.Button}
                    </Button>
                </CardBody>
            </CardImg>
        </Card>
    );
}
export default Features;