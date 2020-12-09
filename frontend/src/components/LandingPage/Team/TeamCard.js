import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardLink
  } from 'reactstrap';

const TeamCard = (props) => {
    return (
        <Card class='card-class' style={{backgroundColor:"#eee", borderColor:"#333", margin:".5%"}}>
          <CardBody>
            <CardTitle tag='h2'>{props.memberName}</CardTitle>
            <CardText class='text'>{props.memberDescription}</CardText>
            <CardLink class='link' href={props.link}>{props.link}</CardLink>
          </CardBody>
        </Card>
    );
}

export default TeamCard;